# Install Claude Code

[Claude Code](https://claude.ai/code) is Anthropic's AI coding agent that runs in your terminal, IDE, desktop app, or on the web. It understands your codebase and can help with code generation, refactoring, debugging, and the full PR workflow. Claude Code reads `AGENTS.md` for project context, following the cross-LLM standard for agent instructions.

## Prerequisites

- A Claude **Pro** ($17/mo) or **Max** ($100/mo) plan, or a Team/Enterprise seat
- macOS, Linux, or Windows

## Quick Install

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Alternative Install Methods

**npm:**
```bash
npm install -g @anthropic-ai/claude-code
```

**Claude Desktop App:**
Download from [claude.ai/download](https://claude.ai/download) — Claude Code is built in.

## First Run

```bash
claude
```

Sign in with your Claude account when prompted. Claude Code will index your current directory and be ready to help.

## Using with Your IDE

### Terminal (standalone)
Run `claude` in any project directory. Claude Code runs alongside your existing tools and asks for permission before making changes.

### VS Code Extension
Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code) or via command line:
```bash
code --install-extension anthropic.claude-code
```

### JetBrains Extension
Install from the [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/27310-claude-code-beta-).

### Web
Access Claude Code directly in your browser at [claude.ai/code](https://claude.ai/code).

## CLAUDE.md Files

Claude Code uses `CLAUDE.md` files to understand project-specific context and conventions. You can add a `CLAUDE.md` to your repo root to give Claude Code instructions about your coding standards, architecture, and workflow preferences.

Example:
```markdown
# CLAUDE.md

This project uses:
- Python 3.11 with FastAPI
- pytest for testing
- Conventional Commits for commit messages
- Branch naming: feature/<name>, bugfix/<name>, hotfix/<name>
```

## Key Features

- **Codebase understanding**: Maps and explains entire codebases in seconds using agentic search
- **Issue to PR**: Handles the full workflow — reading issues, writing code, running tests, submitting PRs
- **Multi-file edits**: Makes powerful changes across multiple files
- **Terminal integration**: Works alongside all your CLI tools
- **GitHub integration**: Connects with GitHub for PR workflows via GitHub Actions

## Learn More

- [Claude Code Documentation](https://code.claude.com/docs/en/overview)
- [Common Workflows](https://code.claude.com/docs/en/common-workflows)
- [Using CLAUDE.md Files](https://claude.com/blog/using-claude-md-files)
