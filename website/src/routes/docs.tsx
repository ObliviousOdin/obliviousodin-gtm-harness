import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/docs")({
  component: DocsPage,
});

const installBlocks = [
  {
    title: "Claude CLI / Claude Code",
    steps: [
      "Copy AetherGTM/ into your workspace root.",
      "Start from the workspace and load AetherGTM/CLAUDE.md.",
      "Run: Read AetherGTM/CLAUDE.md and list available workflows.",
      "Invoke a workflow such as /gtm-audit or /board-pack.",
    ],
  },
  {
    title: "Cursor",
    steps: [
      "Add AetherGTM/CLAUDE.md to Cursor Rules or project instructions.",
      "Keep the AetherGTM folder in the repo for @file references.",
      "Reference @AetherGTM/context/company.md before strategy work.",
    ],
  },
  {
    title: "Hermes / OpenClaw / Windsurf",
    steps: [
      "Mount AetherGTM/CLAUDE.md as persistent project instruction.",
      "Index skills/, workflows/, and context/ as readable resources.",
      "Resolve slash commands by loading matching workflow or skill files.",
    ],
  },
];

function DocsPage() {
  return (
    <Section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Documentation"
        title="Get production-ready in one session."
        description="Install the harness, fill permanent context once, then run slash skills and workflows with hybrid outputs your team can execute."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        <Badge variant="signal">Quick start</Badge>
        <Badge variant="outline">Agent environments</Badge>
        <Badge variant="outline">Context files</Badge>
        <Badge variant="outline">Skill Forge</Badge>
      </div>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="display text-2xl font-semibold text-fg">
            Activation prompt
          </h2>
          <pre className="panel overflow-x-auto rounded-[var(--radius-xl)] p-5 font-mono text-sm text-fg-muted leading-relaxed whitespace-pre-wrap">
{`Load AetherGTM/CLAUDE.md, then use AetherGTM as the operating system
for all GTM work. Auto-load relevant files from AetherGTM/context
before running any skill or workflow.`}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="display text-2xl font-semibold text-fg">
            Repository map
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["CLAUDE.md", "Permanent operating context, voice, principles"],
              ["context/", "Company, ICP, persona, product, competitor, voice"],
              ["skills/", "Modular six-layer skills with slash triggers"],
              ["workflows/", "End-to-end slash-command operating motions"],
              ["agents/", "Specialist sub-agent charters"],
              ["templates/", "Reusable battlecards, briefs, QBRs, scorecards"],
              ["docs/", "Taxonomy, quality standard, changelog"],
              ["website/", "This production marketing + catalog surface"],
            ].map(([path, desc]) => (
              <div
                key={path}
                className="rounded-[var(--radius-lg)] border border-border bg-bg-elevated px-4 py-4"
              >
                <code className="font-mono text-sm text-signal">{path}</code>
                <p className="mt-1 text-sm text-fg-muted">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="display text-2xl font-semibold text-fg">
            Install by environment
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {installBlocks.map((block) => (
              <article
                key={block.title}
                className="panel rounded-[var(--radius-xl)] p-6"
              >
                <h3 className="display text-lg font-semibold text-fg">
                  {block.title}
                </h3>
                <ol className="mt-4 space-y-3 text-sm text-fg-muted">
                  {block.steps.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-mono text-xs text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="display text-2xl font-semibold text-fg">
            Permanent context (fill once)
          </h2>
          <div className="panel rounded-[var(--radius-xl)] p-6">
            <div className="grid gap-2 font-mono text-sm text-fg-muted sm:grid-cols-2">
              {[
                "context/company.md",
                "context/icp.md",
                "context/personas.md",
                "context/products.md",
                "context/competitors.md",
                "context/voice.md",
              ].map((f) => (
                <div key={f} className="rounded bg-bg px-3 py-2 text-signal">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="display text-2xl font-semibold text-fg">
            Expand with Skill Forge
          </h2>
          <pre className="panel overflow-x-auto rounded-[var(--radius-xl)] p-5 font-mono text-sm text-fg-muted leading-relaxed whitespace-pre-wrap">
{`/skill-forge expand domain=customer-success count=50 quality=production output=files`}
          </pre>
          <p className="max-w-2xl text-sm text-fg-muted leading-relaxed">
            The Forge uses the six-layer standard, domain taxonomy, trigger
            naming rules, context loading conventions, and output schemas to
            grow the library toward 500+ skills without breaking quality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="display text-2xl font-semibold text-fg">
            Starter workflow commands
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "/gtm-audit",
              "/icp-v2",
              "/campaign-zero-to-launch",
              "/launch-control",
              "/competitive-war-room",
              "/pipeline-rescue",
              "/board-pack",
              "/annual-gtm-plan",
              "/abm-sprint",
              "/investor-update",
            ].map((cmd) => (
              <code
                key={cmd}
                className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 font-mono text-xs text-signal"
              >
                {cmd}
              </code>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
}
