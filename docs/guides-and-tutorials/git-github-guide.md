---
sidebar_position: 4
---

# Git & GitHub Guide

A practical guide to understanding Git and GitHub before your first contribution.

---

## Part 1: What is Git?

**Git is a version control system** — it tracks changes to your files over time so you can:

- Go back to any previous version
- See who changed what and when
- Work on different features at the same time without breaking things

Think of it like a **save point system** in a video game. Every time you make a meaningful change, you "save" (commit) your progress. If something goes wrong, you can load a previous save.

### Key Concepts

| Term | What it means | Analogy |
|---|---|---|
| **Repository (repo)** | A folder with all your project files + Git history | A project folder |
| **Commit** | A saved snapshot of your changes | A save point |
| **Branch** | A parallel version of your code | A parallel universe |
| **Main/Master** | The default, stable branch | The "real world" |

---

## Part 2: What is GitHub?

**GitHub is a website that hosts Git repositories** so multiple people can work together.

Without GitHub, Git only lives on your computer. GitHub puts it online so others can:
- See your code
- Suggest changes
- Review your work before it goes live

### GitHub-Specific Concepts

| Term | What it means |
|---|---|
| **Fork** | Your personal copy of someone else's repo |
| **Clone** | Downloading a repo to your computer |
| **Pull Request (PR)** | A request to merge your changes into someone else's repo |
| **Merge** | Combining your changes into the main codebase |
| **Upstream** | The original repo you forked from |
| **Origin** | Your fork (your copy on GitHub) |

---

## Part 3: How It All Fits Together

```
                    ┌─────────────────────────┐
                    │   GitHub (the cloud)    │
                    │                         │
  ┌─────────────┐   │   ┌───────────────────┐ │   ┌──────────────────┐
  │  Upstream   │   │   │   Your Fork       │ │   │  Other People's  │
  │ (original)  │◄──┼──►│   (origin)        │◄──┼──►│  Forks           │
  └─────────────┘   │   └───────────────────┘ │   └──────────────────┘
                    │            ▲             │
                    └────────────┼─────────────┘
                                 │ git push / git pull
                                 ▼
                    ┌─────────────────────────┐
                    │  Your Computer (local)  │
                    │                         │
                    │  ┌───────────────────┐  │
                    │  │  Your Files + Git │  │
                    │  └───────────────────┘  │
                    └─────────────────────────┘
```

**The flow:**
1. You **fork** the upstream repo → creates your copy on GitHub
2. You **clone** your fork → downloads it to your computer
3. You **branch** off main → creates a safe space to work
4. You **edit** files → make your changes
5. You **commit** → saves your changes
6. You **push** → sends changes to your fork on GitHub
7. You open a **PR** → asks the upstream repo to accept your changes
8. Your PR gets **merged** → your changes become part of the main project

---

## Part 4: The Commands You Need

### Setup (do this once)

```bash
# Fork the repo on GitHub first (click "Fork" button)

# Clone your fork to your computer
git clone https://github.com/YOUR-USERNAME/repo-name.git
cd repo-name

# Connect to the original repo (upstream)
git remote add upstream https://github.com/ORIGINAL-OWNER/repo-name.git

# Verify remotes
git remote -v
# You should see: origin (your fork) and upstream (original)
```

### Daily Workflow (do this for every contribution)

```bash
# 1. Make sure your main is up to date
git checkout main
git fetch upstream
git merge upstream/main
git push origin main

# 2. Create a new branch for your work
git checkout -b feature/what-youre-doing

# 3. Make your changes (edit files, add files, etc.)

# 4. Check what changed
git status
git diff

# 5. Stage your changes
git add <file>          # specific file
git add .               # all changed files

# 6. Commit (save your changes)
git commit -m "type: description"

# 7. Push to your fork
git push -u origin feature/what-youre-doing

# 8. Open a PR on GitHub (see next section)
```

### Cleanup (after your PR is merged)

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

## Part 5: Commit Messages

We use **Conventional Commits** — a standard format that makes history readable.

### Format

```
type: description

optional body (explains why, not what)
```

### Types

| Type | When to use | Example |
|---|---|---|
| `docs` | Documentation changes | `docs: add git guide` |
| `feat` | New features | `feat: add user profile page` |
| `fix` | Bug fixes | `fix: correct typo in README` |
| `refactor` | Code restructuring (no behavior change) | `refactor: simplify auth logic` |
| `chore` | Maintenance tasks | `chore: update dependencies` |
| `style` | Formatting, whitespace | `style: fix indentation` |

### Good vs Bad Commits

```
❌ Bad:  "update file"
✅ Good: "docs: add setup instructions for macOS"

❌ Bad:  "fix"
✅ Good: "fix: correct broken link in README"

❌ Bad:  "changes"
✅ Good: "feat: add user profile with name and avatar"
```

---

## Part 6: Pull Requests

A PR is how you propose changes to someone else's repo.

### How to Create One

1. Push your branch to your fork: `git push -u origin your-branch`
2. Go to the **original repo** on GitHub
3. Click **"Compare & pull request"** (GitHub usually shows this prompt)
4. Or go to: `https://github.com/ORIGINAL-OWNER/repo/compare/main...YOUR-USERNAME:your-branch`

### A Good PR Has

- **Clear title:** Follow the commit format (`type: description`)
- **Description:** What you changed and why
- **Screenshots** (if UI changed)
- **Linked issues** (if fixing a specific issue)

### PR Review Process

```
You open PR
    │
    ▼
Team reviews → Leave comments/suggestions
    │
    ▼
You address feedback → Push more commits
    │
    ▼
Reviewer approves → PR gets merged
    │
    ▼
Your branch is deleted (usually)
```

---

## Part 7: Common Mistakes & How to Fix Them

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

## Quick Reference Card

Print this or keep it open while you work:

```
┌─────────────────────────────────────────────────────────────┐
│                    GIT QUICK REFERENCE                       │
├─────────────────────────────────────────────────────────────┤
│  git status              → See what changed                  │
│  git diff                → See the actual changes            │
│  git add <file>          → Stage a file                      │
│  git commit -m "msg"     → Save changes                      │
│  git push                → Send to GitHub                    │
│  git pull                → Get latest changes                │
│  git checkout -b <name>  → Create + switch to new branch     │
│  git checkout main       → Switch to main branch             │
│  git branch -d <name>    → Delete a branch                   │
│  git log --oneline       → See commit history                │
│  git remote -v           → See connected repos               │
├─────────────────────────────────────────────────────────────┤
│  Before every new task:                                      │
│    git checkout main && git pull upstream main               │
├─────────────────────────────────────────────────────────────┤
│  Commit format: type: description                            │
│  Types: docs | feat | fix | refactor | chore | style         │
└─────────────────────────────────────────────────────────────┘
```
