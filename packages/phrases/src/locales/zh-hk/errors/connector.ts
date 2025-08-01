const connector = {
  general: '連接器發生錯誤：{{errorDescription}}',
  not_found: '找不到可用的 {{type}} 型別的連接器',
  not_enabled: '連接器尚未啟用',
  invalid_metadata: '連接器 metadata 參數錯誤',
  invalid_config_guard: '連接器配置 guard 錯誤',
  unexpected_type: '連接器型別錯誤',
  invalid_request_parameters: '請求參數錯誤',
  insufficient_request_parameters: '請求參數缺失',
  invalid_config: '連接器配置錯誤',
  invalid_certificate: '連接器的證書無效，請確保證書是以 PEM 編碼。',
  invalid_response: '連接器錯誤響應',
  template_not_found: '無法從連接器配置中找到對應的模板',
  template_not_supported: '連接器不支援此模板類型。',
  rate_limit_exceeded: '觸發速率限制。請稍後再試。',
  not_implemented: '方法 {{method}} 尚未實現',
  social_invalid_access_token: '當前連接器的 access_token 無效',
  invalid_auth_code: '當前連接器的授權碼無效',
  social_invalid_id_token: '當前連接器的 id_token 無效',
  authorization_failed: '用戶授權流程失敗',
  social_auth_code_invalid: '無法獲取 access_token，請檢查授權 code 是否有效',
  more_than_one_sms: '同時存在超過 1 個短信連接器',
  more_than_one_email: '同時存在超過 1 個郵件連接器',
  more_than_one_connector_factory: '找到多個連接器工廠（id 為 {{connectorIds}}），請刪除多餘項目。',
  db_connector_type_mismatch: '資料庫中存在一個型別不匹配的連接。',
  not_found_with_connector_id: '找不到所給 connector id 對應的連接器',
  multiple_instances_not_supported: '你選擇的連接器不支援創建多實例。',
  invalid_type_for_syncing_profile: '只有社交連接器可以開啟用戶檔案同步。',
  can_not_modify_target: '不可修改連接器 target。',
  should_specify_target: '你需要聲明 target 的值。',
  multiple_target_with_same_platform: '同一平台上，多個社交連接器不能重複使用相同的 “Target”。',
  cannot_overwrite_metadata_for_non_standard_connector: '不可覆蓋該連接器的 metadata 參數。',
  email_connector: {
    bulk_deletion_no_filter:
      '必須提供至少一個過濾條件才能根據屬性進行批量刪除。支援的屬性有：{{properties, list(type:conjunction)}}。',
  },
  token_storage_not_supported: '此連接器不支援 token 存儲。',
};

export default Object.freeze(connector);
