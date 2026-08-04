import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-6 px-4 py-20 sm:px-6">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
        404
      </div>
      <h1 className="display text-4xl font-semibold text-fg">Page not found</h1>
      <p className="max-w-md text-fg-muted">
        That route is outside the harness map. Head back to the catalog or start
        from the docs.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link to="/">
          <Button variant="signal">Back home</Button>
        </Link>
        <Link to="/skills">
          <Button variant="outline">Browse skills</Button>
        </Link>
      </div>
    </div>
  );
}
