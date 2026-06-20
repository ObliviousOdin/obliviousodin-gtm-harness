# Category Creation Sprint

**Trigger:** `/category-creation-sprint`  
**Version:** 0.1.0  
**Outcome:** Category narrative and market education sprint.

## Context
Load relevant files from `context/`, inspect available skill files, and select the minimum set of skills needed to complete the workflow.

## Role
Act as AetherGTM workflow conductor. Coordinate specialist sub-agents when work can be split by strategy, analytics, messaging, operations, or enablement.

## Task
Run the workflow end-to-end: intake, diagnosis, artifact creation, operating plan, measurement design, and executive-ready summary.

## Constraints
- Follow six-layer prompt discipline at every stage.
- Stop only for missing inputs that materially affect strategic direction.
- Include owners, timeline, decision points, and instrumentation.
- Produce both polished markdown and a JSON-ready payload.

## Skills to Consider
- `/load-gtm-context`
- `/gtm-prioritize`
- `/decision-memo`
- Domain-specific skills relevant to this workflow

## Steps
1. Intake: goals, audience, constraints, deadline, available data.
2. Context synthesis: facts, assumptions, gaps, and risks.
3. Workstream plan: break into research, strategy, execution, enablement, and measurement.
4. Artifact production: generate the primary deliverables.
5. QA: check evidence, claims, brand voice, and operational feasibility.
6. Launch/rollout plan: owners, dates, dependencies, and enablement.
7. Measurement: dashboard, leading indicators, lagging indicators, and review cadence.

## Output Spec
- Executive brief
- Workstream artifact bundle
- Decision log
- RACI and timeline
- Metrics plan
- Risks and mitigations
- JSON workflow payload
