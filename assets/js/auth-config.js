/* Public routes only. Never put database passwords, API secrets or OTPs here.
   Use a same-origin HTTPS backend proxy to connect to your authentication service. */
window.MIMI_AUTH = {
  loginEndpoint: '',
  verifyEndpoint: '',
  resendEndpoint: '',
  dashboardUrl: 'https://app.mimiapp.co.tz',
  agentPortalUrl: 'https://app.mimiapp.co.tz/agency/login',
  agent: {
    loginEndpoint: '',
    verifyEndpoint: '',
    resendEndpoint: '',
    dashboardUrl: 'https://app.mimiapp.co.tz/agency/login'
  }
};
