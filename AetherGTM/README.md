# AetherGTM v1 — The Ultimate All-in-One Go-To-Market Operating System

AetherGTM is a modular GTM command center for agentic coding environments and AI assistants. It ships with permanent context, company templates, production-grade skills, slash-command workflows, specialist sub-agents, reusable output templates, and a Skill Forge for expanding the library toward 500+ skills.

## Quick Start

```bash
git clone <your-repo>
cd AetherGTM
cat CLAUDE.md
```

Activate in any agent by saying:

```text
Load AetherGTM/CLAUDE.md, then use AetherGTM as the operating system for all GTM work. Auto-load relevant files from AetherGTM/context before running any skill or workflow.
```

## Repository Map

- `CLAUDE.md` — permanent operating context, voice, principles, and GTM manifesto.
- `context/` — company, ICP, persona, product, competitor, and brand voice templates.
- `skills/` — modular six-layer skills with slash triggers and JSON/markdown outputs.
- `workflows/` — end-to-end slash-command workflows.
- `agents/` — specialist sub-agent charters.
- `templates/` — reusable GTM deliverable templates.
- `docs/` — taxonomy, changelog, and advanced guides.

## Installation by Environment

### Claude CLI
1. Copy `AetherGTM/` into your workspace.
2. Start Claude CLI from the workspace root.
3. Prompt: `Read AetherGTM/CLAUDE.md and list available workflows from AetherGTM/workflows.`
4. Run a workflow, for example `/gtm-audit`.

### Hermes
1. Add `AetherGTM/CLAUDE.md` as the persistent project instruction file.
2. Mount `AetherGTM/context`, `AetherGTM/skills`, and `AetherGTM/workflows` as readable project resources.
3. Use the activation command above before execution.

### OpenClaw
1. Place `AetherGTM/` in the repository root.
2. Add `AetherGTM/CLAUDE.md` to OpenClaw project memory.
3. Ask OpenClaw to resolve slash commands by reading matching files in `AetherGTM/workflows/` or `AetherGTM/skills/`.

### Cursor
1. Add `AetherGTM/CLAUDE.md` to Cursor Rules or project instructions.
2. Keep the `AetherGTM/` folder in your repo so Cursor can reference files directly.
3. Use `@AetherGTM/context/company.md` and relevant skill files in chats for grounded outputs.

### Claude Code Desktop + `/skill` System
1. Copy desired skill files from `AetherGTM/skills/**` into your Claude Code skill directory, or reference them in-place.
2. Keep `CLAUDE.md` as the project-level instruction file.
3. Use `/skill` with the matching trigger listed in each skill.

### VS Code + Continue
1. Add `AetherGTM/CLAUDE.md` to Continue custom instructions.
2. Index the `AetherGTM/` directory.
3. Reference workflows with `@AetherGTM/workflows/<workflow>.md`.

### Windsurf
1. Add `AetherGTM/CLAUDE.md` to Windsurf memories or project rules.
2. Ensure the `AetherGTM/` tree is indexed.
3. Invoke slash workflows by name and ask Windsurf to load matching workflow files.

### Any Agentic Coding Environment
1. Put `AetherGTM/` in the project.
2. Load `CLAUDE.md` as system or project context.
3. Treat `skills/` and `workflows/` as executable prompt specs.
4. Save durable company facts in `context/`.

## Add Company Context Forever

Fill these files once, then keep them current:

- `context/company.md`
- `context/icp.md`
- `context/personas.md`
- `context/products.md`
- `context/competitors.md`
- `context/voice.md`

## Expand to 500+ Skills with Forge

Run:

```text
/skill-forge expand domain=<domain> count=<number> quality=production output=files
```

Example:

```text
/skill-forge expand domain=customer-success count=50 quality=production output=files
```

The Forge uses the six-layer standard, domain taxonomy, trigger naming rules, context loading conventions, and output schemas in `skills/forge/skill-forge.md`.

## Included Starter Pack

Phase 1 includes 30 high-leverage skills and 8 workflows across ICP, positioning, product marketing, demand generation, sales, RevOps, customer success, partnerships, pricing, enablement, analytics, and competitive intelligence.
