import { createFileRoute } from "@tanstack/react-router";
import { Bot, Radar, Rocket, Scale, Target, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { gtmCatalog } from "@/lib/catalog";

export const Route = createFileRoute("/agents")({
  component: AgentsPage,
});

const icons = [Target, Radar, Rocket, Scale, Users, Bot];

function AgentsPage() {
  return (
    <Section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Specialist agents"
        title="Sub-agents with charters, not vibes."
        description="Each agent loads permanent context, produces evidence-backed analysis, and returns concise recommendations with risks and next actions."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {gtmCatalog.agents.map((agent, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <article
              key={agent.id}
              className="panel rounded-[var(--radius-xl)] p-6 sm:p-8"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-bg text-signal">
                  <Icon className="h-5 w-5" />
                </div>
                <Badge variant="outline">Agent</Badge>
              </div>
              <h3 className="display text-2xl font-semibold text-fg">
                {agent.title.replace(/ Agent$/i, "")}
              </h3>
              <p className="mt-3 text-sm text-fg-muted leading-relaxed">
                {agent.mission ||
                  "Specialist sub-agent for AetherGTM workflows — loads context, analyzes with evidence, returns next actions."}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-fg-muted">
                <li className="flex gap-2">
                  <span className="text-signal">·</span>
                  Load relevant permanent context before execution
                </li>
                <li className="flex gap-2">
                  <span className="text-signal">·</span>
                  Produce decision-ready analysis with explicit assumptions
                </li>
                <li className="flex gap-2">
                  <span className="text-signal">·</span>
                  Return risks, owners, metrics, and next actions
                </li>
              </ul>
              <code className="mt-6 inline-block rounded bg-bg px-2.5 py-1 font-mono text-xs text-fg-subtle">
                agents/{agent.id}.md
              </code>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
