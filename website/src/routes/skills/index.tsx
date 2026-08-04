import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { SkillCard } from "@/components/site/skill-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { gtmCatalog, searchCatalog } from "@/lib/catalog";
import { cn, domainLabel } from "@/lib/utils";

type SkillsSearch = {
  domain?: string;
  q?: string;
};

export const Route = createFileRoute("/skills/")({
  validateSearch: (search: Record<string, unknown>): SkillsSearch => ({
    domain: typeof search.domain === "string" ? search.domain : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const { domain: domainParam, q: qParam } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(qParam ?? "");
  const activeDomain = domainParam ?? "all";

  const filtered = useMemo(() => {
    const base = searchCatalog(query).skills;
    if (activeDomain === "all") return base;
    return base.filter((s) => s.domain === activeDomain);
  }, [query, activeDomain]);

  return (
    <Section className="py-14 sm:py-20">
      <SectionHeader
        eyebrow="Skills catalog"
        title="Eighty production GTM skills. One command each."
        description="Filter by domain, search by trigger or purpose, and open any skill for the full six-layer operating contract."
      />

      <div className="mb-8 flex flex-col gap-4">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle" />
          <Input
            value={query}
            onChange={(e) => {
              const next = e.target.value;
              setQuery(next);
              navigate({
                search: (prev) => ({
                  ...prev,
                  q: next || undefined,
                }),
                replace: true,
              });
            }}
            placeholder="Search skills, triggers, domains..."
            className="pl-10"
            aria-label="Search skills"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() =>
              navigate({
                search: (prev) => ({ ...prev, domain: undefined }),
              })
            }
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs transition-colors",
              activeDomain === "all"
                ? "border-signal/40 bg-signal/10 text-signal"
                : "border-border text-fg-muted hover:border-border-strong hover:text-fg",
            )}
          >
            All ({gtmCatalog.skills.length})
          </button>
          {gtmCatalog.domains.map((domain) => {
            const count = gtmCatalog.skills.filter((s) => s.domain === domain).length;
            return (
              <button
                key={domain}
                type="button"
                onClick={() =>
                  navigate({
                    search: (prev) => ({ ...prev, domain }),
                  })
                }
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs transition-colors",
                  activeDomain === domain
                    ? "border-signal/40 bg-signal/10 text-signal"
                    : "border-border text-fg-muted hover:border-border-strong hover:text-fg",
                )}
              >
                {domainLabel(domain)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-3">
        <Badge variant="outline">
          {filtered.length} skill{filtered.length === 1 ? "" : "s"}
        </Badge>
        {activeDomain !== "all" ? (
          <span className="text-sm text-fg-muted">
            Domain: {domainLabel(activeDomain)}
          </span>
        ) : null}
      </div>

      {filtered.length === 0 ? (
        <div className="panel rounded-[var(--radius-xl)] px-6 py-16 text-center">
          <p className="text-fg-muted">No skills match that filter.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}
    </Section>
  );
}
