# First CI pipeline: informational-only checks, Greptile as a separate track

**Status:** accepted

We added this repo's first GitHub Actions workflow (`.github/workflows/ci.yml`) to run unit tests, lint, typecheck, and build on every pull request targeting `main`. It's a single sequential job — not parallel jobs — pinned to `bun-version: 1.3.9` (the version in local use at the time) rather than tracking `latest`, so CI stays reproducible until bumped deliberately.

The check is **informational only**: it is not (yet) a required status check in branch protection, so a red CI run does not block merging. This is deliberate — it's the first pipeline in the repo, and we wanted to watch it pass cleanly on real PRs before letting it gate merges. Revisit once it's proven stable.

Separately, we're installing the [Greptile](https://www.greptile.com) GitHub App for automated PR review. Greptile is **not** part of this workflow and has no linkage to it — it's a GitHub App that reviews PRs via webhook independent of Actions/CI status. We considered making Greptile's review gate on CI passing first, but Greptile doesn't support that natively; enforcing an order would require branch protection rules, which is out of scope until CI itself is trusted enough to be required.

## Considered options

- **Parallel jobs** (test/lint/typecheck/build as separate jobs) — rejected: more YAML and runner minutes for a small site where total runtime is already well under a minute sequentially, and a single check in the PR UI is easier to read than four.
- **`bun-version: latest`** — rejected in favor of pinning, to avoid CI breaking on an upstream Bun release with no corresponding change in this repo.
- **Required status check from day one** — rejected: wanted to confirm the pipeline is reliable (Astro's `check`/`build` steps can surface first-run false positives) before it can block the sole committer's own merges.
