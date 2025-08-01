const quota_item = {
  tenant_limit: {
    name: '租戶',
    limited: '{{count, number}} 個租戶',
    limited_other: '{{count, number}} 個租戶',
    unlimited: '無限租戶',
    not_eligible: '刪除您的租戶',
  },
  mau_limit: {
    name: '月活躍用戶',
    limited: '{{count, number}} 個月活躍用戶',
    unlimited: '無限月活躍用戶',
    not_eligible: '刪除您的所有用戶',
  },
  token_limit: {
    name: '令牌',
    limited: '{{count, number}} 個令牌',
    limited_other: '{{count, number}} 個令牌',
    unlimited: '無限令牌',
    not_eligible: '刪除您的所有用戶以防止新增令牌',
  },
  applications_limit: {
    name: '應用程式',
    limited: '{{count, number}} 個應用程式',
    limited_other: '{{count, number}} 個應用程式',
    unlimited: '無限應用程式',
    not_eligible: '刪除您的應用程式',
  },
  machine_to_machine_limit: {
    name: '機器對機器應用程式',
    limited: '{{count, number}} 個機器對機器應用程式',
    limited_other: '{{count, number}} 個機器對機器應用程式',
    unlimited: '無限機器對機器應用程式',
    not_eligible: '刪除您的機器對機器應用程式',
  },
  third_party_applications_limit: {
    name: '第三方應用程式',
    limited: '{{count, number}} 第三方應用程式',
    limited_other: '{{count, number}} 第三方應用程式',
    unlimited: '無限第三方應用程式',
    not_eligible: '刪除您的第三方應用程式',
  },
  resources_limit: {
    name: 'API 資源',
    limited: '{{count, number}} 個 API 資源',
    limited_other: '{{count, number}} 個 API 資源',
    unlimited: '無限 API 資源',
    not_eligible: '刪除您的 API 資源',
  },
  scopes_per_resource_limit: {
    name: '資源範圍',
    limited: '{{count, number}} 個資源範圍',
    limited_other: '{{count, number}} 個資源範圍',
    unlimited: '無限資源範圍',
    not_eligible: '刪除您的資源範圍',
  },
  custom_domain_enabled: {
    name: '自定義域名',
    limited: '自定義域名',
    unlimited: '自定義域名',
    not_eligible: '刪除您的自定義域名',
  },
  omni_sign_in_enabled: {
    name: '統一登入',
    limited: '統一登入',
    unlimited: '統一登入',
    not_eligible: '停用統一登入',
  },
  built_in_email_connector_enabled: {
    name: '內建電子郵件連接器',
    limited: '內建電子郵件連接器',
    unlimited: '內建電子郵件連接器',
    not_eligible: '刪除您的內建電子郵件連接器',
  },
  social_connectors_limit: {
    name: '社交連接器',
    limited: '{{count, number}} 個社交連接器',
    limited_other: '{{count, number}} 個社交連接器',
    unlimited: '無限社交連接器',
    not_eligible: '刪除您的社交連接器',
  },
  standard_connectors_limit: {
    name: '標準連接器限量',
    limited: '{{count, number}} 個標準連接器',
    limited_other: '{{count, number}} 個標準連接器',
    unlimited: '無限標準連接器',
    not_eligible: '刪除您的標準連接器',
  },
  roles_limit: {
    name: '角色',
    limited: '{{count, number}} 個角色',
    limited_other: '{{count, number}} 個角色',
    unlimited: '無限角色',
    not_eligible: '刪除您的角色',
  },
  machine_to_machine_roles_limit: {
    name: '機器對機器角色',
    limited: '{{count, number}} 個機器對機器角色',
    limited_other: '{{count, number}} 個機器對機器角色',
    unlimited: '無限機器對機器角色',
    not_eligible: '刪除您的機器對機器角色',
  },
  scopes_per_role_limit: {
    name: '角色範圍',
    limited: '{{count, number}} 個角色範圍',
    limited_other: '{{count, number}} 個角色範圍',
    unlimited: '無限角色範圍',
    not_eligible: '刪除您的角色範圍',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}} 個 Webhook',
    limited_other: '{{count, number}} 個 Webhook',
    unlimited: '無限制的 Webhook',
    not_eligible: '移除您的 Webhook',
  },
  organizations_enabled: {
    name: '組織',
    limited: '組織',
    unlimited: '組織',
    not_eligible: '刪除您的組織',
  },
  audit_logs_retention_days: {
    name: '審計日誌保留',
    limited: '審計日誌保留：{{count, number}} 天',
    limited_other: '審計日誌保留：{{count, number}} 天',
    unlimited: '無限天數',
    not_eligible: '無審計日誌',
  },
  email_ticket_support: {
    name: '電子郵件票務支援',
    limited: '{{count, number}} 小時電子郵件票務支援',
    limited_other: '{{count, number}} 小時電子郵件票務支援',
    unlimited: '電子郵件票務支援',
    not_eligible: '無電子郵件票務支援',
  },
  mfa_enabled: {
    name: '多因素認證',
    limited: '多因素認證',
    unlimited: '多因素認證',
    not_eligible: '移除您的多因素認證',
  },
  sso_enabled: {
    name: '企業SSO',
    limited: '企業SSO',
    unlimited: '企業SSO',
    not_eligible: '移除您的企業單一登入',
  },
  tenant_members_limit: {
    name: '租戶成員',
    limited: '{{count, number}} 租戶成員',
    limited_other: '{{count, number}} 租戶成員',
    unlimited: '無限租戶成員',
    not_eligible: '刪除您的租戶成員',
  },
  custom_jwt_enabled: {
    name: '自定義JWT',
    limited: '自定義JWT',
    unlimited: '自定義JWT',
    not_eligible: '刪除您的JWT聲明自訂程式',
  },
  impersonation_enabled: {
    name: '假扮',
    limited: '假扮',
    unlimited: '假扮',
    not_eligible: '不允許假扮',
  },
  bring_your_ui_enabled: {
    name: '自帶介面',
    limited: '自帶介面',
    unlimited: '自帶介面',
    not_eligible: '移除您的自定義介面資產',
  },
  collect_user_profile_enabled: {
    name: '收集用戶資料',
    limited: '收集用戶資料',
    unlimited: '收集用戶資料',
    not_eligible: '移除您的用戶資料收集欄位',
  },
  idp_initiated_sso_enabled: {
    name: 'IDP 启动的 SSO',
    limited: 'IDP 启动的 SSO',
    unlimited: 'IDP 启动的 SSO',
    not_eligible: '不允許 IDP 启动的 SSO',
  },
  saml_applications_limit: {
    name: 'SAML 應用程式',
    limited: '{{count, number}} 個 SAML 應用程式',
    limited_other: '{{count, number}} 個 SAML 應用程式',
    unlimited: '無限 SAML 應用程式',
    not_eligible: '刪除您的 SAML 應用程式',
  },
  captcha_enabled: {
    name: '驗證碼',
    limited: '驗證碼',
    unlimited: '驗證碼',
    not_eligible: '刪除您的驗證碼',
  },
  security_features_enabled: {
    name: '高級安全',
    limited: '高級安全',
    unlimited: '高級安全',
    not_eligible: '移除您的高級安全設置',
  },
};

export default Object.freeze(quota_item);
