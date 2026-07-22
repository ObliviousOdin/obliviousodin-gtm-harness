import catalog from "@/data/catalog.json";

export type Skill = {
  id: string;
  title: string;
  domain: string;
  trigger: string;
  purpose: string;
  version: string;
  path: string;
};

export type Workflow = {
  id: string;
  title: string;
  trigger: string;
  purpose: string;
  path: string;
};

export type Agent = {
  id: string;
  title: string;
  mission: string;
};

export type Catalog = {
  skills: Skill[];
  workflows: Workflow[];
  agents: Agent[];
  domains: string[];
  stats: {
    skills: number;
    workflows: number;
    agents: number;
    domains: number;
  };
};

export const gtmCatalog = catalog as Catalog;

export function getSkill(id: string) {
  return gtmCatalog.skills.find((s) => s.id === id);
}

export function getSkillsByDomain(domain: string) {
  return gtmCatalog.skills.filter((s) => s.domain === domain);
}

export function getWorkflow(id: string) {
  return gtmCatalog.workflows.find((w) => w.id === id);
}

export function searchCatalog(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) {
    return {
      skills: gtmCatalog.skills,
      workflows: gtmCatalog.workflows,
      agents: gtmCatalog.agents,
    };
  }
  const match = (text: string) => text.toLowerCase().includes(q);
  return {
    skills: gtmCatalog.skills.filter(
      (s) =>
        match(s.title) ||
        match(s.purpose) ||
        match(s.trigger) ||
        match(s.domain) ||
        match(s.id),
    ),
    workflows: gtmCatalog.workflows.filter(
      (w) => match(w.title) || match(w.purpose) || match(w.trigger) || match(w.id),
    ),
    agents: gtmCatalog.agents.filter(
      (a) => match(a.title) || match(a.mission) || match(a.id),
    ),
  };
}
