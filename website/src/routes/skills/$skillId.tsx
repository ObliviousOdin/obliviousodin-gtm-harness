import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSkill } from "@/lib/catalog";
import { domainLabel } from "@/lib/utils";

export const Route = createFileRoute("/skills/$skillId")({
  loader: ({ params }) => {
    const skill = getSkill(params.skillId);
    if (!skill) throw notFound();
    return { skill };
  },
  component: SkillDetailPage,
});

function SkillDetailPage() {
  const { skill } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);

  const prompt = `Load AetherGTM/CLAUDE.md and run ${skill.trigger} with hybrid output. Auto-load relevant files from AetherGTM/context first.`;

  return (
    <Section className="py-14 sm:py-20">
      <Link
        to="/skills"
        className="mb-8 inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to catalog
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{domainLabel(skill.domain)}</Badge>
              <Badge variant="signal">v{skill.version}</Badge>
            </div>
            <h1 className="display text-4xl font-semibold text-fg sm:text-5xl">
              {skill.title}
            </h1>
            <p className="max-w-2xl text-lg text-fg-muted leading-relaxed">
              {skill.purpose ||
                "Production GTM skill following the six-layer power prompt standard."}
            </p>
          </div>

          <div className="panel rounded-[var(--radius-xl)] p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-fg-subtle">
              <Terminal className="h-3.5 w-3.5" />
              Slash trigger
            </div>
            <code className="block font-mono text-2xl text-signal">
              {skill.trigger}
            </code>
          </div>

          <div className="space-y-4">
            <h2 className="display text-2xl font-semibold text-fg">
              Six-layer contract
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Context",
                  body: "Auto-loads company, ICP, personas, products, competitors, and voice from permanent context files.",
                },
                {
                  title: "Role",
                  body: `Acts as a senior ${domainLabel(skill.domain)} operator with commercial rigor.`,
                },
                {
                  title: "Task",
                  body: skill.purpose || "Convert messy inputs into a decision-ready GTM artifact.",
                },
                {
                  title: "Constraints",
                  body: "Evidence-backed claims only. Separate facts, assumptions, and recommendations. Include owners and metrics.",
                },
                {
                  title: "Examples",
                  body: `Invoke ${skill.trigger} with segment, market, or campaign inputs for grounded outputs.`,
                },
                {
                  title: "Output Spec",
                  body: "Markdown executive deliverable, deterministic JSON payload, or hybrid mode.",
                },
              ].map((layer) => (
                <div
                  key={layer.title}
                  className="rounded-[var(--radius-lg)] border border-border bg-bg-elevated p-5"
                >
                  <div className="text-xs font-medium uppercase tracking-[0.14em] text-signal">
                    {layer.title}
                  </div>
                  <p className="mt-2 text-sm text-fg-muted leading-relaxed">
                    {layer.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="panel rounded-[var(--radius-xl)] p-6 space-y-4">
            <h3 className="display text-lg font-semibold text-fg">
              Run this skill
            </h3>
            <p className="text-sm text-fg-muted leading-relaxed">
              Paste into Claude, Cursor, Hermes, or any agent with AetherGTM
              mounted.
            </p>
            <pre className="overflow-x-auto rounded-[var(--radius-md)] bg-bg p-4 font-mono text-xs text-fg-muted leading-relaxed whitespace-pre-wrap">
              {prompt}
            </pre>
            <Button
              variant="secondary"
              className="w-full"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(prompt);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1600);
                } catch {
                  /* ignore */
                }
              }}
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copied" : "Copy activation prompt"}
            </Button>
          </div>
          <div className="panel rounded-[var(--radius-xl)] p-6 space-y-3 text-sm text-fg-muted">
            <div className="text-xs uppercase tracking-[0.16em] text-fg-subtle">
              Source path
            </div>
            <code className="block font-mono text-xs text-fg break-all">
              {skill.path}
            </code>
          </div>
        </aside>
      </div>
    </Section>
  );
}
