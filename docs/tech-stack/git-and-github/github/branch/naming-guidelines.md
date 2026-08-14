# Branch Naming Guidelines

All work branches follow a consistent naming convention. This is a subset of the full [Branching Strategy](../../ci-cd-pipeline.md#1-branching-strategy); see the CI/CD Pipeline doc for the complete workflow.

## Naming Format

```text
<type>/<short-description>
```

- `<type>` is the category of work being done
- `<short-description>` is a lowercase, hyphen-separated summary of the change

## Accepted Branch Types

| Branch type   | Pattern                       | Example                       | Targets |
| ------------- | ----------------------------- | ----------------------------- | ------- |
| Feature       | `feature/<short-description>` | `feature/ai-refinement-ui`    | `dev`   |
| Bug fix       | `fix/<issue-description>`     | `fix/login-redirect-loop`     | `dev`   |
| Documentation | `docs/<topic>`                | `docs/update-readme`          | `dev`   |
| Refactoring   | `refactor/<component>`        | `refactor/auth-service`       | `dev`   |
| Tests         | `test/<scope>`                | `test/auth-endpoints`         | `dev`   |
| Chores        | `chore/<task>`                | `chore/update-dependencies`   | `dev`   |
| Hotfix        | `hotfix/<description>`        | `hotfix/fix-login-regression` | `main`  |

All work branches are created from `dev` (except hotfixes, which branch from `main`).

## Optional: Include Issue Numbers

To associate a branch with a GitHub issue:

```text
feature/42-user-registration
fix/105-missing-validation
```

## Best Practices

- Use lowercase and hyphens (`-`) for readability
- Keep descriptions concise and clear
- Avoid vague names like `fix-stuff` or `new-branch`
- Keep each branch focused on one logical change

---

**Next:** [Code Review Guidelines](../../code-review-guidelines.md)
