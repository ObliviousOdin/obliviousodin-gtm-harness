# Skill Forge

**Trigger:** `/skill-forge`  
**Domain:** forge  
**Version:** 0.1.0  
**Purpose:** Generate production-grade AetherGTM skills in bulk using the six-layer power prompt standard, unique slash triggers, category metadata, context loading rules, examples, and markdown plus JSON output specs.

## Context
Auto-load `context/company.md`, `context/icp.md`, `context/personas.md`, `context/products.md`, `context/competitors.md`, and `context/voice.md` when relevant. Ask only for missing critical inputs.

## Role
Act as a senior GTM operator with domain expertise in forge.

## Task
Generate production-grade AetherGTM skills in bulk using the six-layer power prompt standard, unique slash triggers, category metadata, context loading rules, examples, and markdown plus JSON output specs. Convert messy user inputs into a decision-ready artifact with clear assumptions, risks, and next actions.

## Constraints
- Use evidence-backed claims only.
- Separate facts, assumptions, and recommendations.
- Include owners, metrics, and validation steps where applicable.
- Support `markdown`, `json`, and `hybrid` output modes.

## Examples
Input: `Run /skill-forge for mid-market SaaS security buyers.`
Output: concise executive summary, structured analysis, recommended plan, and JSON payload.

## Output Spec
### Markdown
1. Executive Summary
2. Inputs Used
3. Analysis
4. Recommendations
5. Risks / Open Questions
6. Next Actions

### JSON
```json
{
  "trigger": "/skill-forge",
  "domain": "forge",
  "summary": "",
  "inputs_used": [],
  "recommendations": [],
  "risks": [],
  "next_actions": []
}
```

## Forge Expansion Protocol
When the user says “expand to 500”, create a manifest of missing skills by domain, then generate files in batches of 25. Each generated skill must have a unique trigger, explicit version, quality checklist, and output schema.
