# Contributing to AetherGTM

Thanks for helping harden Odin's GTM harness.

## Principles
1. **Context before content** — skills must auto-load permanent context.
2. **Six-layer standard** — Context → Role → Task → Constraints → Examples → Output Spec.
3. **Evidence over vibes** — separate facts, assumptions, recommendations.
4. **Hybrid outputs** — markdown + JSON when useful.
5. **Ethical GTM** — no spam, dark patterns, or unsupported claims.

## Adding a skill
1. Place file under `AetherGTM/skills/<domain>/<skill-id>.md`
2. Include trigger, domain, version, purpose
3. Fill all six layers
4. Run `node scripts/validate-skills.mjs`
5. Update `AetherGTM/skills/SKILL_INDEX.md` and regenerate catalog

## Adding a workflow
1. Place under `AetherGTM/workflows/<workflow-id>.md`
2. Define phases, exit criteria, and hybrid output
3. Update `WORKFLOW_INDEX.md`

## Website
Website sources live in `website/`. Keep catalog generation in sync via `scripts/generate-catalog.mjs`.

## Pull requests
- One concern per PR when possible
- Include validation output for skill/workflow changes
- Use the PR template checklist
