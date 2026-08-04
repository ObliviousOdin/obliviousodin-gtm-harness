import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Boxes,
  Crosshair,
  Layers3,
  Orbit,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { SkillCard } from "@/components/site/skill-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { gtmCatalog } from "@/lib/catalog";
import { domainLabel } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const featuredDomains = [
  "core",
  "pm-m",
  "demand-gen",
  "sales-sdr-ae",
  "revops",
  "customer-success",
] as const;

const pillars = [
  {
    icon: Layers3,
    title: "Six-layer skills",
    body: "Every skill is Context → Role → Task → Constraints → Examples → Output Spec — markdown, JSON, or hybrid.",
  },
  {
    icon: Workflow,
    title: "Slash workflows",
    body: "End-to-end motions from GTM audit to board packs, launches, pipeline rescue, and investor updates.",
  },
  {
    icon: Bot,
    title: "Specialist agents",
    body: "Strategist, ICP detective, launch orchestrator, RevOps analyst, and expansion architects on call.",
  },
  {
    icon: Crosshair,
    title: "Permanent context",
    body: "Company, ICP, personas, products, competitors, and voice load before every deliverable.",
  },
];

function HomePage() {
  const featuredSkills = gtmCatalog.skills
    .filter((s) =>
      ["gtm-audit", "positioning-canvas", "message-house", "pipeline-inspector", "battlecard-builder", "health-score"].includes(
        s.id,
      ),
    )
    .slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-noise opacity-70" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <Badge variant="signal">Ever-learning GTM harness</Badge>
            <Badge variant="outline">Production v2</Badge>
            <Badge variant="bright">ObliviousOdin</Badge>
          </div>
          <h1 className="display max-w-4xl text-4xl font-semibold text-fg sm:text-6xl lg:text-7xl text-balance">
            The GTM operating system your agents actually execute.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fg-muted leading-relaxed">
            AetherGTM is Odin's AI-powered Go-To-Market framework — modular
            skills, slash-command workflows, specialist sub-agents, and forever
            company context. Built for Claude, Cursor, Hermes, OpenClaw, and
            every serious agentic stack.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/docs">
              <Button variant="signal" size="lg" className="w-full sm:w-auto">
                Deploy the harness
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/skills">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore {gtmCatalog.stats.skills} skills
              </Button>
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Skills", value: String(gtmCatalog.stats.skills) },
              { label: "Workflows", value: String(gtmCatalog.stats.workflows) },
              { label: "Agents", value: String(gtmCatalog.stats.agents) },
              { label: "Domains", value: String(gtmCatalog.stats.domains) },
            ].map((stat) => (
              <div
                key={stat.label}
                className="panel rounded-[var(--radius-lg)] px-4 py-5"
              >
                <div className="display text-3xl font-semibold text-fg sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-fg-subtle">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section className="py-20 sm:py-24">
        <SectionHeader
          eyebrow="Why AetherGTM"
          title="Not another prompt dump. A revenue operating system."
          description="Context-first execution, evidence over vibes, modular excellence, and outputs that survive board meetings."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="panel rounded-[var(--radius-xl)] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-bg text-signal">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="display text-lg font-semibold text-fg">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-fg-muted leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Domains */}
      <Section className="border-y border-border bg-bg-elevated py-20 sm:py-24">
        <SectionHeader
          eyebrow="Coverage"
          title="Eleven domains. Full GTM stack."
          description="From core strategy and product marketing through demand gen, sales, RevOps, CS, partnerships, pricing, enablement, analytics, and the Skill Forge."
          action={
            <Link to="/skills">
              <Button variant="secondary" size="sm">
                Open catalog
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          }
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDomains.map((domain) => {
            const count = gtmCatalog.skills.filter((s) => s.domain === domain).length;
            return (
              <Link
                key={domain}
                to="/skills"
                search={{ domain }}
                className="group panel flex items-center justify-between rounded-[var(--radius-lg)] px-5 py-4 transition-colors hover:border-border-strong"
              >
                <div>
                  <div className="font-medium text-fg group-hover:text-signal transition-colors">
                    {domainLabel(domain)}
                  </div>
                  <div className="mt-1 font-mono text-xs text-fg-subtle">
                    {count} production skills
                  </div>
                </div>
                <Orbit className="h-4 w-4 text-fg-subtle group-hover:text-signal" />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Featured skills */}
      <Section className="py-20 sm:py-24">
        <SectionHeader
          eyebrow="Featured skills"
          title="High-leverage operators, ready to invoke."
          description="Each skill ships with triggers, constraints, validation steps, and dual markdown/JSON output specs."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="border-t border-border py-20 sm:py-24">
        <SectionHeader
          eyebrow="Activation"
          title="Three steps to a living GTM system."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Drop in AetherGTM",
              body: "Clone the harness, point your agent at CLAUDE.md, and keep the folder in project context.",
              icon: Boxes,
            },
            {
              step: "02",
              title: "Fill permanent context",
              body: "Company, ICP, personas, products, competitors, voice — once, then every skill inherits it.",
              icon: Sparkles,
            },
            {
              step: "03",
              title: "Run slash workflows",
              body: "Invoke /gtm-audit, /icp-v2, /launch-control, /board-pack and ship decision-ready artifacts.",
              icon: Zap,
            },
          ].map((item) => (
            <div key={item.step} className="panel rounded-[var(--radius-xl)] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-signal">{item.step}</span>
                <item.icon className="h-4 w-4 text-fg-subtle" />
              </div>
              <h3 className="display mt-6 text-xl font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-fg-muted leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24">
        <div className="panel relative overflow-hidden rounded-[var(--radius-2xl)] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-signal/15 blur-3xl" />
          <div className="relative max-w-2xl space-y-5">
            <Badge variant="signal">Production ready</Badge>
            <h2 className="display text-3xl font-semibold text-fg sm:text-4xl text-balance">
              Forge the next 500 skills. Run revenue with agents that remember.
            </h2>
            <p className="text-fg-muted leading-relaxed">
              Skill Forge expands domains to production quality. CI validates
              structure. The catalog stays searchable. Your GTM OS compounds.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="https://github.com/ObliviousOdin/obliviousodin-gtm-harness"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="signal" size="lg" className="w-full sm:w-auto">
                  View on GitHub
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link to="/architecture">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Read architecture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
