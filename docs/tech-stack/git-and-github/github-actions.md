# GitHub Actions

GitHub Actions powers our CI/CD pipeline. This guide covers syntax and patterns; for our org-specific pipeline configuration (branches, environments, approval gates), see the [CI/CD Pipeline Architecture](./ci-cd-pipeline.md).

## What are GitHub Actions?

GitHub Actions is a CI/CD platform that lets you automate builds, tests, and deployments. Workflows are defined in YAML files under `.github/workflows/` and triggered by events like pushes, pull requests, or scheduled runs.

## Basic Workflow

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, dev]
  pull_request:
    branches: [main, dev]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Run linter
        run: npm run lint
```

## Common Patterns

### Node.js Application

```yaml
name: Node.js CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm test
```

### Python Application

```yaml
name: Python CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        python-version: [3.11, 3.12, 3.13]

    steps:
      - uses: actions/checkout@v4
      - name: Set up Python ${{ matrix.python-version }}
        uses: actions/setup-python@v5
        with:
          python-version: ${{ matrix.python-version }}
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
      - name: Run tests
        run: pytest
```

## Deployment Workflow

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Deploy to staging
        run: |
          # Deployment commands here
          echo "Deploying to staging..."

      - name: Run smoke tests
        run: |
          # Smoke test commands
          echo "Running smoke tests..."
```

## Best Practices

- Use official actions when available (prefer `@v4` or later)
- Cache dependencies for faster builds
- Use matrix builds for multiple environments
- Store secrets in GitHub encrypted secrets — never in the repo
- Use environment protection rules for `main` and `dev` branches
- Implement proper error handling
- Monitor workflow performance

---

**Reference:** [Generic Git Workflows](./github/flows/) — GitFlow and GitHub Flow (for context)
