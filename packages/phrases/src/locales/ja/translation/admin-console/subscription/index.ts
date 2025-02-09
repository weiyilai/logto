import quota_item from './quota-item.js';
import quota_table from './quota-table.js';
import usage from './usage.js';

const subscription = {
  free_plan: 'フリープラン',
  free_plan_description:
    'サイドプロジェクトや最初の Logto のトライアルに適しています。クレジットカードは必要ありません。',
  pro_plan: 'プロプラン',
  pro_plan_description: 'ビジネスが安心して Logto を利用できるプランです。',
  enterprise: 'エンタープライズプラン',
  enterprise_description: '大規模なチームおよび企業グレードの要件を持つ企業向け。',
  admin_plan: '管理者プラン',
  dev_plan: '開発プラン',
  current_plan: '現在のプラン',
  current_plan_description:
    '現在のプランはこちらです。プランの使用状況を簡単に確認したり、次回の請求を確認したり、必要に応じてプランを変更したりできます。',
  plan_usage: '利用状況',
  plan_cycle: 'プランサイクル: {{period}}。更新日: {{renewDate}}。',
  next_bill: '次回の請求書',
  next_bill_hint: '計算方法については、次の<a>記事</a>を参照してください。',
  next_bill_tip:
    'ここに表示される価格は税抜きであり、更新に若干の遅れが生じる場合があります。税額は、お客様が提供する情報および地元の規制要件に基づいて計算され、請求書に表示されます。',
  manage_payment: '支払い方法の管理',
  overfill_quota_warning:
    'クォータ制限に到達しました。問題を防ぐために、プランをアップグレードしてください。',
  upgrade_pro: 'プロプランにアップグレード',
  update_payment: '支払いを更新する',
  payment_error:
    '支払いに問題が発生しました。前回のサイクルで ${{price, number}} を処理できませんでした。Logto のサービス停止を回避するために支払いを更新してください。',
  downgrade: 'ダウングレード',
  current: '現在',
  upgrade: 'アップグレード',
  quota_table,
  billing_history: {
    invoice_column: '請求書',
    status_column: 'ステータス',
    amount_column: '金額',
    invoice_created_date_column: '請求書作成日',
    invoice_status: {
      void: 'キャンセル済み',
      paid: '支払済み',
      open: '未処理',
      uncollectible: '延滞',
    },
  },
  quota_item,
  downgrade_modal: {
    title: 'ダウングレードしますか？',
    description:
      '<targetName/>に切り替える場合、以前の<currentName/>で使用できたクオータや機能は使用できなくなりますので注意してください。',
    before: '前: <name/>',
    after: '後: <name/>',
    downgrade: 'ダウングレード',
  },
  not_eligible_modal: {
    downgrade_title: 'ダウングレードの対象外です',
    downgrade_description:
      '<name/>へダウングレードする前に、以下の条件を満たしていることを確認してください。',
    downgrade_help_tip: 'ダウングレードのヘルプが必要ですか？<a>お問い合わせください</a>。',
    upgrade_title: '当社の尊敬されるアーリーアダプターの皆様へのフレンドリーなリマインダー',
    upgrade_description:
      '現在、<name /> の許容範囲を超えて使用しています。Logto は正式にリリースされ、各プランに合わせた機能が提供されています。 <name /> へのアップグレードを検討する前に、アップグレードする前提条件を満たしていることを確認してください。',
    upgrade_pro_tip: ' または Pro プランへのアップグレードを検討してください。',
    upgrade_help_tip: 'アップグレードのヘルプが必要ですか？<a>お問い合わせください</a>。',
    a_maximum_of: '<item/>の最大数',
  },
  upgrade_success: '正常に<name/>にアップグレードされました',
  downgrade_success: '正常に<name/>にダウングレードされました',
  subscription_check_timeout:
    'サブスクリプションのチェックがタイムアウトしました。後でもう一度更新してください。',
  no_subscription: '契約なし',
  usage,
  token_usage_notification: {
    exceeded:
      'クォータ制限を 100％超えました。ユーザーは正しくログインできなくなります。問題を避けるためにすぐにアップグレードしてください。',
    close_to_limit:
      'トークン使用制限にほぼ達しました。使用量が 100％を超えると Logto はトークンの発行を停止します。問題を避けるためにフリープランをアップグレードしてください。',
    dev_plan_exceeded:
      'このテナントは Logto のエンティティ制限ポリシーごとのトークン制限に達しました。',
  },
};

export default Object.freeze(subscription);
