# ShortlyApp

A React / Next.js URL-shortening portfolio demo based on the original Shortly landing-page design. The main form validates HTTP(S) URLs, sends the complete URL to the existing external provider, and presents a copyable result. Analytics, branded links, accounts and footer resources are design placeholders, not implemented products.

## Local development

Use Node 22 and npm. This legacy Next 11 build requires the OpenSSL compatibility flag for webpack; this is a local build workaround, not a substitute for upgrading the framework.

```sh
npm ci --ignore-scripts
NODE_OPTIONS=--openssl-legacy-provider npm run dev
```

Open http://localhost:3000. No API key or environment file is required. Do not submit URLs containing private information, credentials or access tokens: submitted URLs are sent to the external provider.

## Verification

```sh
npx playwright install chromium
npm run lint
NODE_OPTIONS=--openssl-legacy-provider npm run build
npm test
npm audit
```

Tests run the production build on port 3106 in Chromium at desktop/mobile sizes, with additional 320/768/1280px assertions. They cover full query encoding, unsafe schemes, safe text rendering, service errors/retry, request timeout, clipboard success/denial, keyboard entry and long-link overflow. Provider responses are mocked: passing tests do **not** demonstrate that the external shortener is operational. There is no TypeScript configuration or separate type checker.

The GitHub workflow runs lint, production build and browser tests on Ubuntu 24.04. Audit remains a separately reported release blocker, not a passing CI claim.

## Current release limits

- On 19 November 2026 IST, the existing `api.shrtco.de` hostname failed DNS resolution from the development environment. Live shortening is unverified; the app reports an error and permits retry.
- The dependency audit reports **40 vulnerabilities** (11 critical, 20 high, 8 moderate, 1 low). Next 11 and the legacy toolchain need a separately scoped upgrade before production release. No forced dependency upgrade has been applied.
- No hosting target or GitHub Pages configuration was found. No public deployment is claimed.
- Components remain under `pages/components`, inherited from the original project; Next therefore exposes them as standalone routes. A future routing cleanup should accompany the framework migration.

## Release checklist

1. Scope and approve the framework migration; resolve relevant audit findings and validate compatibility.
2. Confirm a working, zero-cost shortening provider, its usage terms, browser access and privacy behavior before changing the integration.
3. Identify an existing free hosting path; do not provision paid services or introduce secrets in browser code.
4. Run the checks above, review the PR, and verify a real public URL can be shortened and copied on the served release.
5. Verify keyboard and narrow-screen behavior on the actual deployment before marking release work Done.

Ideas, risk, recommendations and deployment requirements are tracked in [docs/improvement-log.md](docs/improvement-log.md) and GitHub Project “ShortlyApp Improvements”.
