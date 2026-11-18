# ShortlyApp improvement register — 19 November 2026 IST

Repository: atishayjain005/ShortlyApp. Baseline main 1905000 (September 2021).
No prior issues, PRs, rejected ideas found; hosting metadata was initially empty. PR creation later revealed an existing Netlify integration. Original visual design retained.

| Problem | Proposed improvement | Reason / expected impact | Complexity | Risk | Recommendation | Deployment requirement |
|---|---|---|---|---|---|---|
| API strings inserted as HTML; query parameters split | React text rendering, HTTP(S) validation, encoded URL parameter | Prevent executable content and preserve complete URLs | Small | Low | Implement | Redeploy frontend |
| Failed or stalled requests have no recovery | Pending state, response checks, timeout, retry | Explain failure and prevent duplicate requests | Small | Low | Implement | Redeploy frontend |
| Copy reports success before permission result | Await clipboard, expose selectable fallback | Accurate feedback when copying is denied | Small | Low | Implement | HTTPS for clipboard |
| Unlabeled form and broken tablet layouts | Labels, focus, landmarks, working start links and responsive constraints | Keyboard and narrow-screen usability | Medium | Low | Implement | Redeploy frontend |
| No regression gate or useful setup docs | Browser tests, CI and release checklist | Reproducible review and honest release state | Small | Low | Implement | None for CI |
| Legacy Next 11 dependency audit findings | Separately scope supported framework migration | Remove unsupported framework/security debt | Large | Compatibility changes | Backlog; proposal needed before migration | Full regression and hosting review |
| External shortener availability and no host | Verify existing free provider and hosting before release | Avoid claiming an unverified service as production-ready | Medium | External service failure | Backlog | Existing free infrastructure only |

No disruptive changes approved or proposed in this run; no approval deadline or auto-approval.

## Validation and release status

Five scoped implementation areas are complete for review, including production-build browser tests and CI. No new hosting or provider replacement was introduced. Existing api.shrtco.de failed DNS resolution during this run; mocked API tests establish UI behavior only. Audit still reports 40 findings (11 critical, 20 high, 8 moderate, 1 low). Framework migration and live-provider/hosting verification remain Backlog. No claim of production readiness or deployment.

Checks before each implementation commit: ESLint, production build using the legacy OpenSSL webpack flag, the expanding browser suite and diff whitespace check. Final suite: 14 cases; long-content layout verified at 320, 768 and 1280 pixels; mobile screenshot inspected. No separate TypeScript check. All original unrelated workspace changes preserved.

After PR creation: both GitHub browser CI runs passed. The existing Netlify integration automatically built a preview and reported it ready. HTTP access and browser navigation timed out, leaving served runtime unverified. No merge or production update. Existing hosting can be reused after verification.
