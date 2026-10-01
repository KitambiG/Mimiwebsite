# Mimi enquiry delivery

The Get Started and demo flows POST JSON to `api/enquiry.php`. Enquiries are emailed to **info@mimiapp.co.tz**; submitted details are not saved by this code.

## Hosting requirements

- Serve the website through a PHP-capable host, not a static-only host or file preview.
- Configure PHP's `mail()` transport for the sender `info@mimiapp.co.tz`, including the mail provider's domain authentication requirements.
- Confirm delivery with an authorised test after deployment. A successful `mail()` result means the server accepted the message, not that inbox delivery is guaranteed.
- Keep PHP error display off in production. Do not add email credentials to browser scripts.
- The temporary directory must be writable for the per-IP 60-second submission cooldown. The cooldown files contain only a timestamp and use a hashed IP filename.
- Before exposing to significant traffic, add hosting-level rate limits and spam protection; the local cooldown is not distributed abuse prevention.

The success message promises a response within one hour **during working hours**, as requested. Exact business hours are not specified on the form.

`assets/js/enquiry-config.js` can point at a replacement approved endpoint. It must accept the same JSON fields and return a JSON object containing `success: true` only after accepting the enquiry. Errors must return non-success responses. Do not use a static success stub.
