import fs from 'node:fs';

import { appInsights } from '@logto/app-insights/node';
import { type Optional, conditional, yes, trySafe } from '@silverhand/essentials';
import { createClient, createCluster, type RedisClientType, type RedisClusterType } from 'redis';

import { EnvSet } from '#src/env-set/index.js';

import { type CacheStore } from './types.js';
import { cacheConsole } from './utils.js';

abstract class RedisCacheBase implements CacheStore {
  readonly client?: RedisClientType | RedisClusterType;

  async set(key: string, value: string, expire: number = 30 * 60) {
    await this.client?.set(key, value, {
      EX: expire,
    });
  }

  async get(key: string): Promise<Optional<string>> {
    return conditional(await this.client?.get(key));
  }

  async delete(key: string) {
    await this.client?.del(key);
  }

  async connect() {
    if (this.client) {
      try {
        await this.client.connect();
        const pong = await this.ping();

        if (pong === 'PONG') {
          cacheConsole.info('Connected to Redis');
          return;
        }
      } catch (error: unknown) {
        cacheConsole.error(error);
      }
    }
    cacheConsole.warn('No Redis client initialized, skipping');
  }

  async disconnect() {
    if (this.client) {
      await this.client.disconnect();
      cacheConsole.info('Disconnected from Redis');
    }
  }

  protected getSocketOptions(url?: URL) {
    const certFile = url?.searchParams.get('cert');
    const keyFile = url?.searchParams.get('key');
    const caFile = url?.searchParams.get('certroot');

    return {
      rejectUnauthorized: yes(url?.searchParams.get('reject_unauthorized')),
      tls: url?.protocol === 'rediss',
      cert: certFile ? fs.readFileSync(certFile).toString() : undefined,
      key: keyFile ? fs.readFileSync(keyFile).toString() : undefined,
      ca: caFile ? fs.readFileSync(caFile).toString() : undefined,
      reconnectStrategy: (retries: number, cause: Error) => {
        if ('code' in cause && cause.code === 'SELF_SIGNED_CERT_IN_CHAIN') {
          // This will throw only if reject unauthorized is true (default).
          // Doesn't make sense to retry.
          return false;
        }

        if (retries > 5) {
          return new Error('Too many retries');
        }

        return retries * 500;
      },
    };
  }

  protected abstract ping(): Promise<string | undefined>;
}

export class RedisCache extends RedisCacheBase {
  readonly client?: RedisClientType;

  constructor(redisUrl?: string | undefined) {
    super();

    if (redisUrl) {
      this.client = createClient({
        url: conditional(!yes(redisUrl) && redisUrl),
        socket: this.getSocketOptions(trySafe(() => new URL(redisUrl))),
        // Azure redis has a 10 minutes idle timeout
        // @see https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-best-practices-connection#idle-timeout
        pingInterval: 8 * 60 * 1000, // 8 minutes
      });

      this.client.on('error', (error) => {
        void appInsights.trackException(error);
        cacheConsole.error(error);
      });
    }
  }

  protected async ping(): Promise<string | undefined> {
    return this.client?.ping();
  }
}

export class RedisClusterCache extends RedisCacheBase {
  readonly client?: RedisClusterType;

  constructor(connectionUrl: URL) {
    super();

    /* eslint-disable @silverhand/fp/no-mutating-methods */
    const hosts = [];
    if (connectionUrl.host) {
      hosts.push(connectionUrl.host);
    }
    hosts.push(...connectionUrl.searchParams.getAll('host'));
    /* eslint-enable @silverhand/fp/no-mutating-methods */

    const rootNodes = hosts.map((host) => {
      return {
        url: 'redis://' + host,
      };
    });

    this.client = createCluster({
      rootNodes,
      useReplicas: true,
      defaults: {
        socket: this.getSocketOptions(connectionUrl),
        username: connectionUrl.username,
        password: connectionUrl.password,
      },
    });

    this.client.on('error', (error) => {
      void appInsights.trackException(error);
      cacheConsole.error(error);
    });
  }

  protected async ping(): Promise<string | undefined> {
    return this.client?.sendCommand(undefined, true, ['PING']);
  }
}

export const redisCacheFactory = (): RedisCacheBase => {
  const { redisUrl } = EnvSet.values;

  if (redisUrl) {
    const url = trySafe(() => new URL(redisUrl));
    if (url && yes(url.searchParams.get('cluster'))) {
      return new RedisClusterCache(url);
    }
  }

  return new RedisCache(redisUrl);
};

export const redisCache = redisCacheFactory();
