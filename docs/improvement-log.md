# ShortlyApp improvement register — 19 November 2026 IST

Repository: atishayjain005/ShortlyApp. Baseline main 1905000 (September 2021).
No prior issues, PRs, rejected ideas or hosting configuration found. Original visual design retained.

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
