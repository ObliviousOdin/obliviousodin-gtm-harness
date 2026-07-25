import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SiteShell } from "@/components/site/shell";
import { NotFoundPage } from "@/components/site/not-found";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "AetherGTM — Odin's Ever-Learning GTM Agent Harness",
      },
      {
        name: "description",
        content:
          "Production-grade Go-To-Market operating system: 80+ skills, 25 workflows, specialist agents, and permanent company context for any agentic coding environment.",
      },
      { name: "theme-color", content: "#070708" },
      {
        property: "og:title",
        content: "AetherGTM — GTM Agent Harness by ObliviousOdin",
      },
      {
        property: "og:description",
        content:
          "The ultimate AI-powered Go-To-Market framework. Skills, workflows, agents, and forever context.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Instrument+Sans:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <RootDocument>
      <SiteShell>
        <Outlet />
      </SiteShell>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
