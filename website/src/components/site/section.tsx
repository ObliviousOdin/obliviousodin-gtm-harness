import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-4 sm:px-6", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        {eyebrow ? (
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-signal">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="display text-3xl font-semibold text-fg sm:text-4xl text-balance">
          {title}
        </h2>
        {description ? (
          <p className="text-base text-fg-muted leading-relaxed">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
