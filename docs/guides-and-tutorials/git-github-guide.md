---
sidebar_position: 3
---

# Your First Contribution with Git & GitHub

This guide walks you through the practical steps of contributing to an EndToEndLabCR project — from forking to your first merged pull request. For detailed reference on any step, links point to the source-of-truth guides in the Tech Stack section.

> **New to Git?** Start with the [Git & GitHub Basics](../tech-stack/git-and-github/git-basics.md) guide first, then come back here for the hands-on workflow.

> **Need org access?** See [Day 1 of the Onboarding Guide](./onboarding-guide.md#day-1-accounts-and-access) to learn how to request membership to the EndToEndLabCR GitHub organization.

> **Want to practice?** Try the [First Commit Lab](https://github.com/EndToEndLabCR/firstcommit-lab-github) — a sandbox exercise to rehearse the contribution workflow before contributing to any EndToEndLabCR repo (docs, templates, or projects).

---

## 1. Setup (do this once)

```bash
# Fork the repo on GitHub first (click "Fork" button)

# Clone your fork to your computer
git clone https://github.com/YOUR-USERNAME/repo-name.git
cd repo-name

# Connect to the original repo (upstream)
git remote add upstream https://github.com/EndToEndLabCR/repo-name.git

# Verify remotes
git remote -v
# You should see: origin (your fork) and upstream (original)
```

> See [Essential Git Commands](../tech-stack/git-and-github/github/essential-commands.md) for a full reference of everyday Git commands.

---

## 2. Daily Workflow (every contribution)

```bash
# 1. Make sure your main is up to date
git checkout main
git fetch upstream
git merge upstream/main
git push origin main

# 2. Create a new branch for your work
git checkout -b feature/what-youre-doing

# 3. Make your changes, then check what changed
git status
git diff

# 4. Stage and commit
git add .
git commit -m "type: description"

# 5. Push to your fork
git push -u origin feature/what-youre-doing
```

> See [Branching Strategy](../tech-stack/git-and-github/branching-strategy.md) for workflow details and [Commit Message Guidelines](../tech-stack/git-and-github/github/commits-guide.md) for commit format.

---

## 3. Commit Messages

We follow **Conventional Commits** (`type: summary`). See the full [Commit Message Guidelines](../tech-stack/git-and-github/github/commits-guide.md) for details.

Common types:

| Type       | When to use                             | Example                         |
| ---------- | --------------------------------------- | ------------------------------- |
| `docs`     | Documentation changes                   | `docs: add setup instructions`  |
| `feat`     | New features                            | `feat: add user profile page`   |
| `fix`      | Bug fixes                               | `fix: correct typo in README`   |
| `refactor` | Code restructuring (no behavior change) | `refactor: simplify auth logic` |
| `chore`    | Maintenance tasks                       | `chore: update dependencies`    |
| `style`    | Formatting, whitespace                  | `style: fix indentation`        |

---

## 4. Pull Requests

1. Push your branch: `git push -u origin your-branch`
2. Go to the **original repo** on GitHub
3. Click **"Compare & pull request"**
4. Or visit: `https://github.com/EndToEndLabCR/repo/compare/main...YOUR-USERNAME:your-branch`

A good PR includes a clear title (follow commit format), a description of what you changed and why, screenshots (if UI changed), and linked issues.

> See [Code Review Guidelines](../tech-stack/git-and-github/code-review-guidelines.md) for the review process and checklist. See the [PR Template](../tech-stack/git-and-github/github/resources/PULL_REQUEST_TEMPLATE.md) for the standard format.

---

## 5. Cleanup (after your PR is merged)

```bash
# Switch back to main
git checkout main

# Delete your old branch
git branch -d feature/what-youre-doing

# Sync with upstream for next time
git fetch upstream
git merge upstream/main
```

---

## 6. Common Mistakes & How to Fix Them

### "I committed to main by accident"

```bash
# Don't panic. Create a branch from where you are
git checkout -b feature/my-accidental-work

# Reset main back to upstream
git checkout main
git reset --hard upstream/main
git push origin main --force
```

### "I forgot to add a file to my commit"

```bash
# Add the forgotten file
git add forgotten-file.md

# Amend the last commit
git commit --amend --no-edit
git push --force-with-lease
```

### "My branch is behind main"

```bash
# Fetch latest from upstream
git fetch upstream

# Merge into your branch
git merge upstream/main

# If there are conflicts, resolve them, then:
git add .
git commit -m "fix: resolve merge conflicts"
git push
```

### "I pushed to the wrong branch"

```bash
# Check which branches exist
git branch -a

# You can't easily "unpush" — but you can:
# 1. Create the correct branch from current state
git checkout -b correct-branch

# 2. Push it
git push origin correct-branch

# 3. Open PR from the correct branch
# 4. Delete the wrong branch on GitHub
git push origin --delete wrong-branch
```

---

## 7. Practice: Contribute to the Organization

Reading about Git is one thing — doing it is another. Before contributing to a real EndToEndLabCR repo, put everything in this guide into practice with a hands-on exercise.

**[First Commit Lab](https://github.com/EndToEndLabCR/firstcommit-lab-github)** — a sandbox repository where you can fork, branch, commit, and open your first pull request. The same workflow you practice here applies to contributing across the entire EndToEndLabCR organization: this docs site, template repos, project repos, and more.

1. **Fork** the lab repo on GitHub (click the "Fork" button)
2. **Clone** your fork locally: `git clone https://github.com/YOUR-USERNAME/firstcommit-lab-github.git`
3. **Add a file** under the `participants/` folder (e.g., your name or a short intro)
4. **Commit** using the Conventional Commits format above (e.g., `feat: add intro for Alonso`)
5. **Push** to your fork: `git push -u origin feature/your-name`
6. **Open a pull request** back to the original repo and watch it go through review

> **Tip:** This is a safe exercise — experiment and make mistakes here. Once you're comfortable with the workflow, you're ready to contribute to any EndToEndLabCR repo: documentation (like this site), templates, or projects. See the [Onboarding Guide](./onboarding-guide.md) to find where to start.

---

## Related Guides

- [Git & GitHub Basics](../tech-stack/git-and-github/git-basics.md) — theory and concepts
- [Essential Git Commands](../tech-stack/git-and-github/github/essential-commands.md) — command reference
- [Branch Naming Guidelines](../tech-stack/git-and-github/github/branch/naming-guidelines.md)
- [Commit Message Guidelines](../tech-stack/git-and-github/github/commits-guide.md)
- [Code Review Guidelines](../tech-stack/git-and-github/code-review-guidelines.md)
- [Branching Strategy](../tech-stack/git-and-github/branching-strategy.md)
- [First Commit Lab](https://github.com/EndToEndLabCR/firstcommit-lab-github) — hands-on exercise to practice before contributing to any EndToEndLabCR repo
