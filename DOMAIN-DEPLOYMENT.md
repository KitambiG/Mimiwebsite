# Primary domain: mimiapp.co.tz

Marketing canonical URL: https://mimiapp.co.tz/
Application: https://app.mimiapp.co.tz (unchanged)
Public contact: info@mimiapp.co.tz

Canonical URLs, social URLs, organization URLs, robots.txt and the sitemap use the primary marketing domain. The homepage canonical is the root URL, not /index.html.

## Deployment checks

- Point the marketing domains at the deployed site and provision valid TLS certificates for each hostname before enabling redirects.
- On Apache with mod_rewrite and AllowOverride enabled, deploy the included .htaccess. It redirects old marketing hosts and www to the HTTPS primary domain, preserving paths and queries, and normalises index.html to /.
- On Nginx, a CDN, or other hosting, configure equivalent 301 redirects in that service; .htaccess does not apply there.
- If TLS terminates at a reverse proxy, configure HTTPS detection at the host/CDN before using the Apache HTTPS rule, to avoid redirect loops. Do not trust arbitrary client-supplied proxy headers.
- Do not apply marketing redirects to app.mimiapp.co.tz.
- Verify old-domain page URLs resolve to their corresponding primary-domain pages, and ensure the homepage does not loop.
- Submit https://mimiapp.co.tz/sitemap.xml in the primary domain's Google Search Console property and inspect the homepage.

These changes are local source changes. DNS, hosting redirects, live mail delivery and Google indexing have not been changed or verified by this task.

## Customer evidence

The Mama Dunia Safari Lodge testimonial and Karatu location were supplied for publication by the site owner. No personal spokesperson, rating, customer logo or numerical improvement was invented. Keep a record of the lodge's approval. No review/rating structured data is added.

Airbnb integration documentation, a supported-platform list backing the existing 49+ claim, and a public phone/address remain to be supplied.
