import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Workflow } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { gtmCatalog } from "@/lib/catalog";

export const Route = createFileRoute("/workflows")({
  component: WorkflowsPage,
});

function WorkflowsPage() {
  const [query, setQuery] = useState("");
  const workflows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return gtmCatalog.workflows;
    return gtmCatalog.workflows.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.purpose.toLowerCase().includes(q) ||
        w.trigger.toLowerCase().includes(q) ||
        w.id.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Workflows"
        title="Twenty-five end-to-end GTM motions."
        description="Slash-command workflows that chain context, skills, and agent charters into complete operating plays — from audit to board pack."
      />

      <div className="relative mb-8 max-w-xl">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search workflows..."
          className="pl-10"
          aria-label="Search workflows"
        />
      </div>

      <div className="mb-6">
        <Badge variant="outline">
          {workflows.length} workflow{workflows.length === 1 ? "" : "s"}
        </Badge>
      </div>

      <div className="grid gap-3">
        {workflows.map((workflow, index) => (
          <article
            key={workflow.id}
            className="panel grid gap-4 rounded-[var(--radius-xl)] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-bg text-signal">
              <Workflow className="h-5 w-5" />
            </div>
            <div className="min-w-0 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="display text-lg font-semibold text-fg">
                  {workflow.title}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm text-fg-muted leading-relaxed">
                {workflow.purpose}
              </p>
            </div>
            <code className="inline-flex w-fit rounded bg-bg px-2.5 py-1.5 font-mono text-xs text-signal sm:justify-self-end">
              {workflow.trigger.startsWith("/")
                ? workflow.trigger
                : `/${workflow.id}`}
            </code>
          </article>
        ))}
      </div>
    </Section>
  );
}
