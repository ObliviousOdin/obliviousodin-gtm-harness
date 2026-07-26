import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { gtmCatalog } from "@/lib/catalog";

export const Route = createFileRoute("/architecture")({
  component: ArchitecturePage,
});

function ArchitecturePage() {
  return (
    <Section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Architecture"
        title="How the harness thinks and ships."
        description="AetherGTM is an operating system for GTM work: permanent context, modular skills, composable workflows, and specialist agents under a single quality standard."
      />

      <div className="mb-10 flex flex-wrap gap-2">
        <Badge variant="signal">Context before content</Badge>
        <Badge variant="outline">Evidence over vibes</Badge>
        <Badge variant="outline">Revenue relevance</Badge>
        <Badge variant="outline">Ethical GTM</Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="panel rounded-[var(--radius-xl)] p-6 sm:p-8 space-y-4">
          <h2 className="display text-2xl font-semibold text-fg">
            Operating principles
          </h2>
          <ol className="space-y-4 text-sm text-fg-muted">
            {[
              "Context before content — load relevant context/ files before strategy or assets.",
              "Evidence over vibes — separate facts, assumptions, risks, and validation steps.",
              "Modular excellence — every output is reusable as playbook, prompt, template, or workflow artifact.",
              "Executive clarity — lead with the answer, then rationale, options, and next actions.",
              "Revenue relevance — connect work to pipeline, conversion, retention, expansion, margin, or learning.",
              "Ethical GTM — no deceptive claims, spam, dark patterns, or unsupported competitor assertions.",
            ].map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="panel rounded-[var(--radius-xl)] p-6 sm:p-8 space-y-4">
          <h2 className="display text-2xl font-semibold text-fg">
            Six-layer power prompt
          </h2>
          <div className="space-y-3">
            {[
              ["Context", "What the agent must load first"],
              ["Role", "Who it acts as and expertise boundary"],
              ["Task", "Decision-ready outcome definition"],
              ["Constraints", "Evidence, owners, ethics, formats"],
              ["Examples", "Canonical input → output shape"],
              ["Output Spec", "Markdown / JSON / hybrid contracts"],
            ].map(([title, body], i) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-bg px-4 py-3"
              >
                <span className="font-mono text-xs text-signal pt-0.5">
                  L{i + 1}
                </span>
                <div>
                  <div className="text-sm font-medium text-fg">{title}</div>
                  <div className="text-sm text-fg-muted">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {[
          {
            title: "Skills layer",
            body: `${gtmCatalog.stats.skills} modular skills across ${gtmCatalog.stats.domains} domains. Each skill is versioned, slash-triggered, and dual-output.`,
          },
          {
            title: "Workflows layer",
            body: `${gtmCatalog.stats.workflows} multi-step motions that orchestrate skills and agents into complete GTM plays.`,
          },
          {
            title: "Agents layer",
            body: `${gtmCatalog.stats.agents} specialist charters for strategy, ICP, launches, RevOps, battlecards, and expansion.`,
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-[var(--radius-xl)] border border-border bg-bg-elevated p-6"
          >
            <h3 className="display text-lg font-semibold text-fg">{card.title}</h3>
            <p className="mt-2 text-sm text-fg-muted leading-relaxed">
              {card.body}
            </p>
          </article>
        ))}
      </div>

      <article className="panel mt-4 rounded-[var(--radius-xl)] p-6 sm:p-8">
        <h2 className="display text-2xl font-semibold text-fg">
          Production quality bar
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "CI validates skill frontmatter, triggers, and six-layer sections",
            "Catalog JSON regenerated from the AetherGTM tree for the website",
            "Changelog + semantic versioning for skills and workflows",
            "Security policy, contributing guide, and PR templates",
            "Skill Forge expands libraries without abandoning taxonomy",
            "Hybrid outputs keep humans and machines in the same loop",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 text-sm text-fg-muted leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              {item}
            </div>
          ))}
        </div>
      </article>
    </Section>
  );
}
