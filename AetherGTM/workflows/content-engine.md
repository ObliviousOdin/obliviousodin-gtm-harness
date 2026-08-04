# Content Engine

**Trigger:** `/content-engine`  
**Type:** workflow  
**Version:** 1.0.0  
**Status:** production  
**Purpose:** Run the end-to-end Content Engine GTM motion.

## Mission
Orchestrate a complete GTM operating motion from intake → analysis → decision → execution plan → measurement. Load permanent context first. Invoke the right skills and specialist agents. Ship hybrid outputs.

## Preconditions
1. `AetherGTM/CLAUDE.md` loaded
2. Relevant `context/*` files reviewed
3. User goal, timebox, and constraints captured
4. Available data sources listed (CRM, analytics, research, interviews)

## Phases
### 1. Intake & framing
- Clarify the decision or outcome
- Define success metrics and non-goals
- Identify stakeholders and owners

### 2. Context load
- Company, ICP, personas, products, competitors, voice
- Pull any user-provided evidence

### 3. Diagnosis
- Map current state vs target state
- Score gaps by impact × confidence × effort
- Surface critical risks early

### 4. Design
- Options with tradeoffs
- Recommended path with rationale
- Resource, timeline, and dependency model

### 5. Execution plan
- Workstreams, owners, dates
- Enablement and messaging needs
- Measurement plan and kill criteria

### 6. Readout
- Executive summary
- Hybrid markdown + JSON artifact
- Next 7/30/90 day actions

## Skills commonly used
- Core prioritization, decision memo, assumption ledger
- Domain skills matching the motion
- Analytics / RevOps for measurement where relevant

## Agents
Route specialist work to the matching agent charter in `agents/` when depth is required.

## Output Spec
### Markdown
1. Executive Summary
2. Framing & Success Metrics
3. Diagnosis
4. Recommendation
5. Execution Plan
6. Measurement & Risks
7. Next Actions

### JSON
```json
{
  "workflow": "/content-engine",
  "version": "1.0.0",
  "goal": "",
  "success_metrics": [],
  "diagnosis": [],
  "recommendation": "",
  "plan": [
    { "workstream": "", "owner": "", "deliverable": "", "due": "" }
  ],
  "risks": [],
  "next_actions": []
}
```

## Exit Criteria
- Decision is explicit
- Owners and dates exist
- Metrics and validation steps are defined
- Artifact is reusable by another agent without re-briefing
