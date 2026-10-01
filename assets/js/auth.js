(function () {
  'use strict';
  var rootConfig = window.MIMI_AUTH || {};
  var isAgent = document.body.dataset.authRole === 'agent';
  var config = isAgent ? (rootConfig.agent || {}) : rootConfig;
  var key = isAgent ? 'mimi.agentPendingChallenge' : 'mimi.pendingChallenge';
  var message = document.querySelector('.auth-message');
  var login = document.getElementById('login-form'), otp = document.getElementById('otp-form');
  var resend = document.querySelector('.otp-resend'), busy = false, pending = null;
  function say(text, error) { message.textContent = text; message.dataset.error = String(!!error); }
  function safeUrl(value, sameOrigin) {
    if (!value) throw new Error('Authentication is not connected yet. Please use the Mimi web app or contact support.');
    var url = new URL(value, location.href);
    if (url.protocol !== 'https:' || (sameOrigin && url.origin !== location.origin)) throw new Error('Authentication needs a same-origin HTTPS connection. Please contact support.');
    return url.href;
  }
  if (config.agentPortalUrl) {
    try { var agent = document.querySelector('[data-agent-portal]'); agent.href = safeUrl(config.agentPortalUrl, false); agent.hidden = false; document.querySelector('[data-agent-pending]').hidden = true; } catch (_) {}
  }
  var configured = config.loginEndpoint && config.verifyEndpoint && config.resendEndpoint;
  document.querySelector('.auth-integration-note').hidden = !!configured;
  function clear() { pending = null; try { sessionStorage.removeItem(key); } catch (_) {} }
  function save(value) { pending = value; sessionStorage.setItem(key, JSON.stringify(value)); }
  function valid() { return pending && typeof pending.challengeId === 'string' && pending.expiresAt > Date.now(); }
  function challenge(data) {
    var expiry = Date.parse(data.expiresAt);
    if (!data.challengeId || typeof data.challengeId !== 'string' || !Number.isFinite(expiry) || expiry <= Date.now()) throw new Error('The server did not return a valid verification session. Please sign in again.');
    return {challengeId:data.challengeId, expiresAt:expiry, maskedEmail:typeof data.maskedEmail === 'string' ? data.maskedEmail : 'your email address', resendAt:Date.now() + Math.max(30, Math.min(300, Number(data.retryAfterSeconds) || 60)) * 1000};
  }
  async function request(endpoint, body) {
    var url = safeUrl(endpoint, true), controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 20000);
    try {
      var response = await fetch(url, {method:'POST', credentials:'same-origin', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body), signal:controller.signal, cache:'no-store'});
      if (!response.ok) {
        if (response.status === 429) throw new Error('Too many attempts. Please wait before trying again.');
        if (response.status === 401 || response.status === 422) throw new Error(otp ? 'The code could not be verified. Check your latest email and try again.' : 'We could not sign you in. Check your credentials and try again.');
        if (response.status === 410) { clear(); throw new Error('This verification session has expired. Please sign in again.'); }
        throw new Error('Authentication is temporarily unavailable. Please try again later.');
      }
      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') throw new Error('The request timed out. Check your email before requesting another code.');
      if (error instanceof SyntaxError || error instanceof TypeError) throw new Error('Could not reach the authentication service. Please try again later.');
      throw error;
    } finally { clearTimeout(timer); }
  }
  if (login) {
    clear();
    login.querySelector('[type="submit"]').disabled = false;
    document.querySelector('.password-toggle').addEventListener('click', function () {
      var visible = login.elements.password.type === 'password';
      login.elements.password.type = visible ? 'text' : 'password';
      this.textContent = visible ? 'Hide' : 'Show'; this.setAttribute('aria-pressed', String(visible));
    });
    login.addEventListener('submit', async function (event) {
      event.preventDefault(); if (busy || !login.reportValidity()) return;
      var button = login.querySelector('[type="submit"]'); busy = true; button.disabled = true; say('Signing in…');
      try {
        // Check storage availability before starting a server-side challenge.
        sessionStorage.setItem(key, '{}'); sessionStorage.removeItem(key);
        safeUrl(config.verifyEndpoint, true); safeUrl(config.resendEndpoint, true);
        var data = await request(config.loginEndpoint, {username:login.elements.username.value.trim(), password:login.elements.password.value});
        if (data.status !== 'otp_required') throw new Error('The server did not confirm an email verification step. Please contact support.');
        save(challenge(data)); login.elements.password.value = ''; location.assign(isAgent ? 'agent-verify-otp.html' : 'verify-otp.html');
      } catch (error) { say(error.message, true); }
      finally { login.elements.password.value = ''; busy = false; button.disabled = false; }
    });
  }
  if (otp) {
    try { pending = JSON.parse(sessionStorage.getItem(key)); } catch (_) { clear(); }
    var verify = otp.querySelector('[type="submit"]'), destination = document.getElementById('otp-destination');
    function render() {
      if (!valid()) { verify.disabled = true; resend.disabled = true; destination.textContent = 'Sign in again to request a new verification code.'; document.querySelector('.otp-timer').textContent = ''; return; }
      destination.textContent = 'Enter the code sent to ' + pending.maskedEmail + '.';
      var seconds = Math.max(0, Math.ceil((pending.resendAt - Date.now()) / 1000));
      verify.disabled = busy; resend.disabled = busy || seconds > 0;
      document.querySelector('.otp-timer').textContent = seconds ? 'You can request another code in ' + seconds + ' seconds.' : 'Didn’t receive it? Check your spam folder or request a new code.';
    }
    render(); setInterval(render, 1000);
    otp.addEventListener('submit', async function (event) {
      event.preventDefault(); if (busy || !valid() || !otp.reportValidity()) return;
      busy = true; render(); say('Verifying…');
      try {
        var target = safeUrl(config.dashboardUrl, false);
        var data = await request(config.verifyEndpoint, {challengeId:pending.challengeId, code:otp.elements.code.value});
        if (data.status !== 'authenticated') throw new Error('The code could not be verified. Please try again.');
        clear(); otp.elements.code.value = ''; location.assign(target);
      } catch (error) { say(error.message, true); }
      finally { otp.elements.code.value = ''; busy = false; render(); }
    });
    resend.addEventListener('click', async function () {
      if (busy || !valid() || Date.now() < pending.resendAt) return;
      busy = true; render(); say('Requesting a new code…');
      try {
        var data = await request(config.resendEndpoint, {challengeId:pending.challengeId});
        if (data.status !== 'otp_sent') throw new Error('A new code was not confirmed. Please try again later.');
        save(challenge(data)); otp.elements.code.value = ''; say('A new code has been sent. Use the latest code in your email.');
      } catch (error) { say(error.message, true); if (pending) { pending.resendAt = Date.now() + 60000; try { save(pending); } catch (_) {} } }
      finally { busy = false; render(); }
    });
    document.querySelector('[data-auth-restart]').addEventListener('click', clear);
  }
})();
