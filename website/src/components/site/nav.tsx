import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/skills", label: "Skills" },
  { to: "/workflows", label: "Workflows" },
  { to: "/agents", label: "Agents" },
  { to: "/docs", label: "Docs" },
  { to: "/architecture", label: "Architecture" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-bg-elevated font-mono text-xs text-signal group-hover:border-signal/40 transition-colors">
            Æ
          </span>
          <div className="leading-tight">
            <div className="display text-sm font-semibold tracking-tight text-fg">
              AetherGTM
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
              ObliviousOdin
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.to === "/"
                ? pathname === "/"
                : pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-bg-subtle text-fg"
                    : "text-fg-muted hover:text-fg hover:bg-bg-elevated",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ObliviousOdin/obliviousodin-gtm-harness"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </a>
          <Link to="/docs" className="hidden sm:inline-flex">
            <Button variant="signal" size="sm">
              Get started
            </Button>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg-elevated md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-sm)] px-3 py-3 text-sm text-fg-muted hover:bg-bg-subtle hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/ObliviousOdin/obliviousodin-gtm-harness"
              target="_blank"
              rel="noreferrer"
              className="rounded-[var(--radius-sm)] px-3 py-3 text-sm text-fg-muted hover:bg-bg-subtle hover:text-fg"
            >
              GitHub repository
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
