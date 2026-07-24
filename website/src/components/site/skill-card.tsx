import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Skill } from "@/lib/catalog";
import { domainLabel } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link
      to="/skills/$skillId"
      params={{ skillId: skill.id }}
      className="group panel flex flex-col gap-4 rounded-[var(--radius-lg)] p-5 transition-all duration-200 hover:border-border-strong hover:bg-bg-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <Badge variant="outline">{domainLabel(skill.domain)}</Badge>
        <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
      </div>
      <div className="space-y-2">
        <h3 className="display text-lg font-semibold text-fg">{skill.title}</h3>
        <p className="text-sm text-fg-muted line-clamp-2 leading-relaxed">
          {skill.purpose || "Production GTM skill with six-layer prompt standard."}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 pt-1">
        <code className="rounded bg-bg px-2 py-1 font-mono text-xs text-signal">
          {skill.trigger}
        </code>
        <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
          v{skill.version}
        </span>
      </div>
    </Link>
  );
}
