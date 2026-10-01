# Mimi login and email OTP integration

The login and verify-otp pages are frontend UI, not a working authentication service. No credentials or emails are sent until routes are configured in `assets/js/auth-config.js`. Do not connect browser code directly to the database.

## Routes to implement

Serve all three endpoints on the marketing page's HTTPS origin (use a secure backend proxy where necessary). Requests use POST JSON and same-origin cookies.

1. Login: accepts `{username, password}`. Verify the stored password hash server-side. Only after queuing a real email code return `{status: "otp_required", challengeId: "opaque-id", maskedEmail: "m***@example.com", expiresAt: "ISO-8601 timestamp", retryAfterSeconds: 60}`.
2. Verification: accepts `{challengeId, code}` (six digits). Return `{status: "authenticated"}` only after verifying the code and establishing an authenticated server session.
3. Resend: accepts `{challengeId}`. Queue a new email, invalidate the previous code, then return `{status: "otp_sent", challengeId, maskedEmail, expiresAt, retryAfterSeconds}` with the same field types as login. A rotated challenge ID is supported.

Use HTTP 401/422 for invalid credentials/code, 410 for an expired challenge, 429 for rate limits, and 5xx for service failure. Return JSON, not HTML redirects. Never include plaintext passwords or OTPs in responses or logs.

## Security requirements before launch

- Cryptographically random, short-lived, single-use OTPs; hash and verify codes on the server.
- Bind challenges to a pre-authentication HttpOnly cookie/session; a challenge ID alone must not authorise verification or resending. Store no authentication token in browser storage.
- Enforce expiration, attempt limits, per-user/IP rate limits and resend cooldown server-side. The displayed countdown is only UI.
- Use secure password hashing, generic login errors, CSRF/origin protections, secure HttpOnly session cookies and appropriate SameSite settings. Rotate the session ID after authentication.
- Configure actual transactional email delivery and monitor failures.
- Implement trusted cross-subdomain session/SSO handling for app.mimiapp.co.tz before redirecting there. A frontend redirect does not establish an app session. Do not send access tokens in query strings.
- The browser stores only pending challenge ID, masked email and expiry/cooldown timestamps in sessionStorage. Password and OTP input values are cleared after submission; neither is persisted or logged by this frontend.
- Complete end-to-end security and delivery testing before removing the integration-pending notice. The notice hides automatically when all three endpoint values are set.

Agent portal: https://app.mimiapp.co.tz/agency/login

## Separate agent login

`agent-login.html` and `agent-verify-otp.html` use the same validated UI flow with separate `MIMI_AUTH.agent` endpoints and the `mimi.agentPendingChallenge` session-storage key. Configure all three agent endpoints independently; they must enforce agency identity and permissions server-side. A page's `data-auth-role` value is only UI routing, never authorisation.

The agent dashboard URL currently points to the existing agency login as a safe fallback. Replace it with the verified post-login agency landing URL when implementing SSO. The property-team login links to the new local agent page; that page retains a direct link to the existing live portal. No real authentication or OTP delivery is implemented by these pages.

Theme follows Africa/Dar_es_Salaam (UTC+3): light 06:00–17:59, dark 18:00–05:59. It updates every 30 seconds and on returning to the tab, independently of the visitor's local timezone.
