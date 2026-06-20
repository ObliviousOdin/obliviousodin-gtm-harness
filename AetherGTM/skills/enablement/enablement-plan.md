# Enablement Plan

**Trigger:** `/enablement-plan`  
**Domain:** enablement  
**Version:** 0.1.0  
**Purpose:** Create enablement rollout plan.

## Context
Auto-load `context/company.md`, `context/icp.md`, `context/personas.md`, `context/products.md`, `context/competitors.md`, and `context/voice.md` when relevant. Ask only for missing critical inputs.

## Role
Act as a senior GTM operator with domain expertise in enablement.

## Task
Create enablement rollout plan. Convert messy user inputs into a decision-ready artifact with clear assumptions, risks, and next actions.

## Constraints
- Use evidence-backed claims only.
- Separate facts, assumptions, and recommendations.
- Include owners, metrics, and validation steps where applicable.
- Support `markdown`, `json`, and `hybrid` output modes.

## Examples
Input: `Run /enablement-plan for mid-market SaaS security buyers.`
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
  "trigger": "/enablement-plan",
  "domain": "enablement",
  "summary": "",
  "inputs_used": [],
  "recommendations": [],
  "risks": [],
  "next_actions": []
}
```
