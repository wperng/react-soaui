export const IDENTITY_CONFIG = {
    authority: process.env.REACT_APP_AUTH_URL,
    client_id: process.env.REACT_APP_IDENTITY_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URL,
    response_type: "code",
    // scope: "username",
    login: process.env.REACT_APP_AUTH_URL + "/login",
    automaticSilentRenew: false,
    loadUserInfo: false,
    silent_redirect_uri: process.env.REACT_APP_SILENT_REDIRECT_URL,
    post_logout_redirect_uri: process.env.REACT_APP_LOGOFF_REDIRECT_URL,
    audience: "https://example.com",
    grantType: "AUTHORIZATION_CODE",
    webAuthResponseType: "code",
    // extraQueryParams: { domain: "TedevstDomain" },
    //acr_values: "domain:TestDomain",
};


// http://localhost:8080/auth/realms/dev/.well-known/openid-configuration
export const METADATA_OIDC = {
    issuer: "http://localhost:8080/auth/realms/dev",
    jwks_uri:
        process.env.REACT_APP_AUTH_URL +
        "/.well-known/openid-configuration/jwks",
    authorization_endpoint:
        process.env.REACT_APP_AUTH_URL + "/realms/dev/protocol/openid-connect/auth",
    token_endpoint: process.env.REACT_APP_AUTH_URL + "/realms/dev/protocol/openid-connect/token",
    userinfo_endpoint:
        process.env.REACT_APP_AUTH_URL + "/realms/dev/protocol/openid-connect/userinfo",
    end_session_endpoint:
        process.env.REACT_APP_AUTH_URL + "/realms/dev/protocol/openid-connect/logout",
    check_session_iframe:
        process.env.REACT_APP_AUTH_URL + "/connect/checksession",
    revocation_endpoint: process.env.REACT_APP_AUTH_URL + "/realms/dev/protocol/openid-connect/login-status-iframe.html",
    introspection_endpoint:
        process.env.REACT_APP_AUTH_URL + "/realms/dev/protocol/openid-connect/token/introspect",
};
