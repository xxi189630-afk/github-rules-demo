# github-rules-demo

Temporary demo repository used to capture **real GitHub UI screenshots** for a
class presentation about platform-enforced collaboration rules.

- All content is synthetic. No real credentials, no production code.
- `src/auth/login.js` is owned by `@xxi189630-afk` via `.github/CODEOWNERS`.
- The `demo-pr` workflow creates a bot-authored pull request and publishes two
  commit statuses (`build` = success, `test` = failure).
- Branch protection on `main` requires both status checks, so the pull request
  shows GitHub's real "Merging is blocked" state.

This repository can be deleted after the screenshots are captured.
