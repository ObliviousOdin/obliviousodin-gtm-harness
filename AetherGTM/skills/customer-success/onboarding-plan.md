# Onboarding Plan

**Trigger:** `/onboarding-plan`  
**Domain:** customer-success  
**Version:** 0.1.0  
**Purpose:** Create customer onboarding plan with milestones, owners, and success criteria.

## Context
Auto-load the most relevant files from `context/`, prioritizing company, ICP, personas, products, competitors, and voice. If source data is incomplete, state assumptions and request only inputs that materially change the recommendation.

## Role
Act as a senior GTM operator and domain expert in customer-success. Think like a strategist, practitioner, analyst, and enablement lead.

## Task
Create customer onboarding plan with milestones, owners, and success criteria. Transform user inputs into a production-ready GTM artifact that can be used by leadership and frontline teams.

## Constraints
- Follow the six-layer AetherGTM standard: Context → Role → Task → Constraints → Examples → Output Spec.
- Distinguish facts, assumptions, hypotheses, and recommendations.
- Include measurable success criteria, owner suggestions, and validation steps.
- Avoid unsupported claims, dark patterns, spam tactics, and competitor misinformation.
- Support output modes: `markdown`, `json`, and `hybrid`.

## Examples
Input: `Run /onboarding-plan for enterprise fintech accounts in North America; output=hybrid.`
Expected behavior: load context, identify missing critical inputs, produce a concise executive artifact, then emit structured JSON.

## Output Spec
### Markdown
1. Executive Summary
2. Inputs and Assumptions
3. Recommended Artifact
4. Metrics and Instrumentation
5. Risks, Dependencies, and Legal/Brand Checks
6. Next Actions

### JSON
```json
{
  "trigger": "/onboarding-plan",
  "domain": "customer-success",
  "version": "0.1.0",
  "inputs": [],
  "assumptions": [],
  "artifact": {},
  "metrics": [],
  "risks": [],
  "next_actions": []
}
```
