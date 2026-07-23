import { Link } from "@tanstack/react-router";
import { gtmCatalog } from "@/lib/catalog";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <div className="display text-lg font-semibold">AetherGTM</div>
          <p className="max-w-md text-sm text-fg-muted leading-relaxed">
            Odin's ever-learning GTM agent harness — production skills,
            slash workflows, specialist agents, and permanent company context
            for any agentic coding environment.
          </p>
          <p className="font-mono text-xs text-fg-subtle">
            {gtmCatalog.stats.skills} skills · {gtmCatalog.stats.workflows}{" "}
            workflows · {gtmCatalog.stats.agents} agents ·{" "}
            {gtmCatalog.stats.domains} domains
          </p>
        </div>
        <div className="space-y-3">
          <div className="text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle">
            Product
          </div>
          <div className="flex flex-col gap-2 text-sm text-fg-muted">
            <Link to="/skills" className="hover:text-fg">
              Skills catalog
            </Link>
            <Link to="/workflows" className="hover:text-fg">
              Workflows
            </Link>
            <Link to="/agents" className="hover:text-fg">
              Agents
            </Link>
            <Link to="/architecture" className="hover:text-fg">
              Architecture
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle">
            Resources
          </div>
          <div className="flex flex-col gap-2 text-sm text-fg-muted">
            <Link to="/docs" className="hover:text-fg">
              Documentation
            </Link>
            <a
              href="https://github.com/ObliviousOdin/obliviousodin-gtm-harness"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fg"
            >
              GitHub
            </a>
            <a
              href="https://github.com/ObliviousOdin/obliviousodin-gtm-harness/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fg"
            >
              License
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>Branded for ObliviousOdin · Built for operators who ship</span>
          <span className="font-mono">v2 production harness</span>
        </div>
      </div>
    </footer>
  );
}
