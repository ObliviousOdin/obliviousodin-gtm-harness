# AetherGTM — ObliviousOdin GTM Agent Harness

<p align="center">
  <strong>Odin's ever-learning Go-To-Market operating system</strong><br/>
  for agentic coding environments
</p>

<p align="center">
  <a href="https://obliviousodin.github.io/obliviousodin-gtm-harness/"><img src="https://img.shields.io/badge/Live_site-GitHub_Pages-5eead4?style=for-the-badge&labelColor=070708" alt="Live site" /></a>
  <a href="https://github.com/ObliviousOdin/obliviousodin-gtm-harness"><img src="https://img.shields.io/badge/GitHub-Repo-c5ccd9?style=for-the-badge&labelColor=070708" alt="GitHub" /></a>
</p>

<p align="center">
  <a href="https://github.com/ObliviousOdin/obliviousodin-gtm-harness/actions/workflows/ci.yml"><img src="https://github.com/ObliviousOdin/obliviousodin-gtm-harness/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="License: MIT" /></a>
  <a href="AetherGTM/skills/SKILL_INDEX.md"><img src="https://img.shields.io/badge/skills-80+-informational" alt="Skills" /></a>
  <a href="AetherGTM/workflows/WORKFLOW_INDEX.md"><img src="https://img.shields.io/badge/workflows-25-informational" alt="Workflows" /></a>
  <img src="https://img.shields.io/badge/agents-6-informational" alt="Agents" />
  <img src="https://img.shields.io/badge/domains-11-informational" alt="Domains" />
</p>

---

### Live product page

**[→ Open the AetherGTM site on GitHub Pages](https://obliviousodin.github.io/obliviousodin-gtm-harness/)**

Dark editorial landing page with stats, domain coverage, activation steps, and starter commands — same visual language as the in-repo `website/` app.

---

## Why this exists

Most prompt packs are loose notes. **AetherGTM is an operating system:**

| Pillar | What you get |
| --- | --- |
| **Context before content** | Company, ICP, personas, products, competitors, voice |
| **Six-layer skills** | Context → Role → Task → Constraints → Examples → Output Spec |
| **Hybrid outputs** | Board-ready markdown + machine-readable JSON |
| **Workflows** | End-to-end motions from audit to board pack |
| **Agents** | Specialist charters for strategy, ICP, launch, RevOps, expansion |
| **Production tooling** | Validators, catalog generation, CI |

## Quick start

```bash
git clone https://github.com/ObliviousOdin/obliviousodin-gtm-harness.git
cd obliviousodin-gtm-harness
```

**Activation prompt** for any agent:

```text
Load AetherGTM/CLAUDE.md, then use AetherGTM as the operating system for all GTM work.
Auto-load relevant files from AetherGTM/context before running any skill or workflow.
```

<details>
<summary><strong>Repository map</strong></summary>

| Path | Purpose |
| --- | --- |
| `AetherGTM/CLAUDE.md` | Permanent OS context |
| `AetherGTM/context/` | Company truth templates |
| `AetherGTM/skills/` | 80+ production skills |
| `AetherGTM/workflows/` | 25 end-to-end workflows |
| `AetherGTM/agents/` | Specialist agent charters |
| `AetherGTM/templates/` | Deliverable templates |
| `docs/index.html` | GitHub Pages landing site |
| `website/` | Full product website + catalog UI (TanStack) |
| `scripts/` | Validation & catalog tooling |

</details>

## Install by environment

Works with **Claude CLI / Claude Code**, **Cursor**, **Hermes**, **OpenClaw**, **Windsurf**, **VS Code + Continue**, and any agent that can read project files.

See [`AetherGTM/README.md`](AetherGTM/README.md) for environment-specific steps.

## Starter commands

`/gtm-audit` · `/icp-v2` · `/campaign-zero-to-launch` · `/launch-control` · `/competitive-war-room` · `/pipeline-rescue` · `/board-pack` · `/annual-gtm-plan` · `/abm-sprint` · `/investor-update`

## Tooling

```bash
npm run validate   # structure check for all skills
npm run catalog    # regenerate website + docs catalog
npm run check      # validate + catalog
```

## Website sources

| Surface | Path | Notes |
| --- | --- | --- |
| **GitHub Pages** | `docs/index.html` | Static HTML — no build required |
| **Full app** | `website/` | TanStack Start + catalog UI |

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
