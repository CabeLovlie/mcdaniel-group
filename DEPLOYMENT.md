# Deployment notes

Netlify builds this site with `npm run build` and publishes `dist` (see `netlify.toml`). The default setting intentionally adds `noindex, nofollow` meta tags and a disallowing `robots.txt` to local, preview, and unconfigured deployments.

Before the production launch:

1. Set `PUBLIC_SITE_URL=https://www.mcdanielgrp.com`.
2. Set `PUBLIC_SITE_IS_PRODUCTION=true` in Netlify's production environment only. Leave it unset for deploy previews and branch deploys.
3. Connect and verify the production custom domain, then add the redirect in `netlify/production-domain-redirect.toml.example` to `netlify.toml` so Netlify's default URL redirects to the production domain.
4. Confirm `/robots.txt`, `/sitemap.xml`, canonical URLs, the security headers, and the contact links on the deployed production site.

The Content Security Policy permits only same-origin scripts, styles, images, fonts, and connections. Keep the navigation and contact JavaScript as external local files; do not add inline script or external tracking without revisiting the policy.
