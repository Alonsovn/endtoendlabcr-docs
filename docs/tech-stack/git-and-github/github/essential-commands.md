# Essential Git Commands

A quick reference for everyday Git usage. For our complete branching strategy, CI/CD pipeline, and contribution workflow, see the [CI/CD Pipeline Architecture](../ci-cd-pipeline.md).

---

## Repository Setup

- `git init` — Create a new Git repository
- `git clone <url>` — Copy a remote repository to your machine
- `git config` — Set global name/email for Git

---

## Staging & Committing

- `git status` — Show modified/untracked files
- `git add <file>` — Stage specific file(s)
- `git add .` — Stage all changes
- `git commit -m "msg"` — Save staged changes with a message

---

## Branching

- `git branch` — List branches
- `git branch <name>` — Create a new branch
- `git checkout <branch>` — Switch to a branch
- `git checkout -b <branch>` — Create and switch to a new branch
- `git merge <branch>` — Merge another branch into the current one

---

## Working with Remotes

- `git remote -v` — List connected remote repositories
- `git remote add origin <url>` — Connect to a remote repo
- `git fetch <remote>` — Download changes without merging
- `git pull` — Fetch and merge changes from the remote
- `git push` — Upload commits to the remote
- `git push -u origin <branch>` — Push and set upstream tracking

---

## Undoing Changes

- `git reset <file>` — Unstage a file
- `git reset --hard <commit>` — Discard all changes since a commit
- `git revert <commit>` — Undo a commit with a new one
- `git stash` — Temporarily save uncommitted changes
- `git stash pop` — Restore stashed changes
- `git commit --amend` — Modify the most recent commit

---

## Additional Useful Commands

- `git log --oneline --graph --decorate` — Compact, visual history view
- `git diff` — See unstaged changes
- `git diff --staged` — See staged changes before committing
- `git switch -c <branch>` — Create and switch to a new branch (modern alternative to `checkout -b`)
- `git rebase <branch>` — Reapply commits on top of another branch (advanced)

---

Use this as a reference when working with Git locally or in collaborative projects. For our full contribution workflow, see the [Git & GitHub Guide](../../../guides-and-tutorials/git-github-guide.md).

---

**Next:** [Your First Contribution Guide](../../../guides-and-tutorials/git-github-guide.md)
