#!/usr/bin/env node
import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (e.name.endsWith(".md") && !e.name.includes("INDEX") && e.name !== "README.md") files.push(p);
  }
  return files;
}

function parseSkill(file) {
  const raw = fs.readFileSync(file, "utf8");
  const id = path.basename(file, ".md");
  const domain = path.basename(path.dirname(file));
  return {
    id,
    title: (raw.match(/^#\s+(.+)/m) || [, id])[1],
    domain,
    trigger: (raw.match(/\*\*Trigger:\*\*\s*`([^`]+)`/) || [, `/${id}`])[1],
    purpose: ((raw.match(/\*\*Purpose:\*\*\s*(.+)/) || [, ""])[1] || "").trim(),
    version: ((raw.match(/\*\*Version:\*\*\s*(.+)/) || [, "1.0.0"])[1] || "").trim(),
    path: file.replace(/\\/g, "/"),
  };
}

const skills = walk("AetherGTM/skills").map(parseSkill);
const workflows = walk("AetherGTM/workflows").map((f) => {
  const raw = fs.readFileSync(f, "utf8");
  const id = path.basename(f, ".md");
  return {
    id,
    title: (raw.match(/^#\s+(.+)/m) || [, id])[1],
    trigger: (raw.match(/`(\/[^`]+)`/) || [, `/${id}`])[1],
    purpose: ((raw.match(/\*\*Purpose:\*\*\s*(.+)/) || [, "End-to-end GTM workflow"])[1] || "").trim(),
    path: f.replace(/\\/g, "/"),
  };
});
const agents = fs
  .readdirSync("AetherGTM/agents")
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const raw = fs.readFileSync(path.join("AetherGTM/agents", f), "utf8");
    return {
      id: f.replace(".md", ""),
      title: (raw.match(/^#\s+(.+)/m) || [, f])[1],
      mission: ((raw.match(/## Mission\n([\s\S]*?)(?:\n##|$)/) || [, ""])[1] || "").trim(),
    };
  });

const catalog = {
  skills,
  workflows,
  agents,
  domains: [...new Set(skills.map((s) => s.domain))].sort(),
  stats: {
    skills: skills.length,
    workflows: workflows.length,
    agents: agents.length,
    domains: [...new Set(skills.map((s) => s.domain))].length,
  },
  generatedAt: new Date().toISOString(),
};

fs.mkdirSync("website/src/data", { recursive: true });
fs.mkdirSync("AetherGTM/docs", { recursive: true });
fs.writeFileSync("website/src/data/catalog.json", JSON.stringify(catalog, null, 2));
fs.writeFileSync("AetherGTM/docs/catalog.json", JSON.stringify(catalog, null, 2));
console.log("Catalog written:", catalog.stats);
