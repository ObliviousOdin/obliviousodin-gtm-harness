# AetherGTM — ObliviousOdin GTM Agent Harness

**Odin's ever-learning Go-To-Market operating system** for agentic coding environments.

[![CI](https://github.com/ObliviousOdin/obliviousodin-gtm-harness/actions/workflows/ci.yml/badge.svg)](https://github.com/ObliviousOdin/obliviousodin-gtm-harness/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-80+-informational)](AetherGTM/skills/SKILL_INDEX.md)
[![Workflows](https://img.shields.io/badge/workflows-25-informational)](AetherGTM/workflows/WORKFLOW_INDEX.md)

AetherGTM ships permanent company context, production-grade skills, slash-command workflows, specialist agents, reusable templates, and a Skill Forge — so AI agents execute GTM work with commercial rigor instead of vibes.

## Why this exists
Most prompt packs are loose notes. AetherGTM is an **operating system**:

- **Context before content** — company, ICP, personas, products, competitors, voice
- **Six-layer skills** — Context → Role → Task → Constraints → Examples → Output Spec
- **Hybrid outputs** — board-ready markdown + machine-readable JSON
- **Workflows** — end-to-end motions from audit to board pack
- **Agents** — specialist charters for strategy, ICP, launch, RevOps, expansion
- **Production tooling** — validators, catalog generation, CI

## Quick start
```bash
git clone https://github.com/ObliviousOdin/obliviousodin-gtm-harness.git
cd obliviousodin-gtm-harness
```

Activation prompt for any agent:

```text
Load AetherGTM/CLAUDE.md, then use AetherGTM as the operating system for all GTM work.
Auto-load relevant files from AetherGTM/context before running any skill or workflow.
```

## Repository map
| Path | Purpose |
| --- | --- |
| `AetherGTM/CLAUDE.md` | Permanent OS context |
| `AetherGTM/context/` | Company truth templates |
| `AetherGTM/skills/` | 80+ production skills |
| `AetherGTM/workflows/` | 25 end-to-end workflows |
| `AetherGTM/agents/` | Specialist agent charters |
| `AetherGTM/templates/` | Deliverable templates |
| `website/` | Product website + catalog UI |
| `scripts/` | Validation & catalog tooling |

## Install by environment
Works with Claude CLI / Claude Code, Cursor, Hermes, OpenClaw, Windsurf, VS Code + Continue, and any agent that can read project files. See `AetherGTM/README.md` and the website docs page for environment-specific steps.

## Starter commands
`/gtm-audit` · `/icp-v2` · `/campaign-zero-to-launch` · `/launch-control` · `/competitive-war-room` · `/pipeline-rescue` · `/board-pack` · `/annual-gtm-plan` · `/abm-sprint` · `/investor-update`

## Tooling
```bash
npm run validate   # structure check for all skills
npm run catalog    # regenerate website + docs catalog
npm run check      # validate + catalog
```

## Website
```bash
cd website
npm install
npm run dev
```

## Expand toward 500+ skills
```text
/skill-forge expand domain=customer-success count=50 quality=production output=files
```

## License
MIT © ObliviousOdin
