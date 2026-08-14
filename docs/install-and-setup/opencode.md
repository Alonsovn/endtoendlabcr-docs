# Install OpenCode

[OpenCode](https://opencode.ai) is an open-source AI coding agent that runs in your terminal, IDE, or as a desktop app. It supports 75+ model providers (including Claude, GPT, Gemini), has built-in LSP support, and enables multi-session workflows. OpenCode reads `AGENTS.md` for project context, following the cross-LLM standard for agent instructions.

## Quick Install

```bash
curl -fsSL https://opencode.ai/install | bash
```

### Alternative Install Methods

**npm:**
```bash
npm install -g opencode
```

**Brew (macOS/Linux):**
```bash
brew install opencode
```

**Bun:**
```bash
bun install -g opencode
```

## First Run

```bash
opencode
```

OpenCode will guide you through initial setup, including model provider selection.

## Using with Your IDE

### Terminal (standalone)
Run `opencode` in any project directory to start an AI coding session directly in your terminal.

### VS Code Extension
Install the OpenCode extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=opencode.opencode) or via command line:
```bash
code --install-extension opencode.opencode
```

### JetBrains Extension
Available from the [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/opencode).

## Model Configuration

OpenCode supports multiple model providers:

- **Included models**: Free models come with OpenCode (Zen)
- **GitHub Copilot**: Log in with your GitHub account to use your Copilot subscription
- **ChatGPT Plus/Pro**: Log in with OpenAI to use your existing subscription
- **Any model**: 75+ providers through Models.dev, including local models

Configure your preferred model in `~/.config/opencode/config.json` or through the interactive setup on first run.

## Key Features

- **LSP enabled**: Automatically loads the right LSPs for the LLM
- **Multi-session**: Start multiple agents in parallel on the same project
- **Share links**: Share a link to any session for reference or debugging
- **Privacy-first**: Does not store your code or context data

## Learn More

- [OpenCode Documentation](https://opencode.ai/docs)
- [GitHub Repository](https://github.com/anomalyco/opencode)
- [Discord Community](https://opencode.ai/discord)
