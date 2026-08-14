# Generic Git Workflows Reference

This page covers two common Git branching patterns for context. **EndToEndLabCR uses a two-branch model (`dev` + `main`) with fork-based contributions.** See the [CI/CD Pipeline Architecture](../../ci-cd-pipeline.md) for our canonical workflow.

These patterns are included here because you may encounter them in other teams or open-source projects.

---

## GitHub Flow

A simple strategy with a single `main` branch and short-lived feature branches. Works well for small teams and continuously-deployed projects.

### How it works

- **`main`**: Always in a deployable state. Production-ready code.
- **Feature branches**: Created from `main`, merged back via pull requests.

### Workflow

1. Fork the repository
2. Create a feature branch from `main`: `git checkout -b feature/my-feature main`
3. Develop, commit, and push to your fork
4. Open a PR from your fork to `main`
5. Once approved, merge and delete the feature branch

### When to use

- Small teams (1–5 developers)
- Projects that deploy frequently (daily or multiple times per day)
- Simple release cycles with no need for parallel development streams

> **Not our workflow.** See [CI/CD Pipeline Architecture](../../ci-cd-pipeline.md) for EndToEndLabCR's approach.

---

## GitFlow

A structured branching model with `main`, `develop`, `feature`, `release`, and `hotfix` branches. Works well for projects with scheduled release cycles.

### How it works

| Branch | Purpose | Created from |
|---|---|---|
| `main` | Official release history | — |
| `develop` | Integration branch for features | `main` |
| `feature/*` | New features or bug fixes | `develop` |
| `release/*` | Preparing new releases | `develop` |
| `hotfix/*` | Urgent production fixes | `main` |

### Workflow

1. Create `develop` branch from `main`
2. Features branch off `develop`, merge back when complete
3. When ready for a release, create `release/*` from `develop`
4. Finalize release on `release/*`, merge to both `main` and `develop`
5. Hotfixes branch from `main`, merge to both `main` and `develop`

### When to use

- Larger teams with parallel development streams
- Projects with scheduled releases (weekly, monthly, quarterly)
- Need to isolate release preparation from ongoing feature work

> **Not our workflow.** See [CI/CD Pipeline Architecture](../../ci-cd-pipeline.md) for EndToEndLabCR's approach.

---

## Comparison

| Aspect | GitHub Flow | GitFlow |
|---|---|---|
| Branches | `main` + features | `main`, `develop`, features, releases, hotfixes |
| Complexity | Low | High |
| Deployment | Continuous | Scheduled |
| Best for | Small teams, CI/CD | Large teams, release cycles |
| Our use? | No | No |

**EndToEndLabCR uses a simplified two-branch model** (`dev` + `main`) with fork-based contributions — borrowing the simplicity of GitHub Flow with the integration branch concept from GitFlow, but without the overhead of release branches.

---

← Back to [Git & GitHub Index](../../README.md)
