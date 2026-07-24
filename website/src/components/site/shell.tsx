import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
