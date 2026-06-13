#!/usr/bin/env node
import fs from "fs";
import path from "path";

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (e.name.endsWith(".md") && e.name !== "SKILL_INDEX.md") files.push(p);
  }
  return files;
}

const skills = walk("AetherGTM/skills").map((f) => {
  const raw = fs.readFileSync(f, "utf8");
  const id = path.basename(f, ".md");
  const domain = path.basename(path.dirname(f));
  return {
    id,
    domain,
    title: (raw.match(/^#\s+(.+)/m) || [, id])[1],
    trigger: (raw.match(/\*\*Trigger:\*\*\s*`([^`]+)`/) || [, `/${id}`])[1],
    version: ((raw.match(/\*\*Version:\*\*\s*(.+)/) || [, "1.0.0"])[1] || "").trim(),
  };
});

const byDomain = {};
for (const s of skills) {
  byDomain[s.domain] ||= [];
  byDomain[s.domain].push(s);
}

let md = `# AetherGTM Skill Index

Production skill library for AetherGTM. **${skills.length} skills** across **${Object.keys(byDomain).length} domains**.

Each skill follows the six-layer standard and supports markdown, JSON, and hybrid output modes.

## Domains
`;

for (const domain of Object.keys(byDomain).sort()) {
  md += `\n### ${domain} (${byDomain[domain].length})\n\n`;
  md += "| Skill | Trigger | Version |\n| --- | --- | --- |\n";
  for (const s of byDomain[domain].sort((a, b) => a.id.localeCompare(b.id))) {
    md += `| [${s.title}](./${domain}/${s.id}.md) | \`${s.trigger}\` | ${s.version} |\n`;
  }
}

md += `
## Expansion
Use \`/skill-forge expand domain=<domain> count=<n> quality=production output=files\` to grow toward 500+ skills.
`;

fs.writeFileSync("AetherGTM/skills/SKILL_INDEX.md", md);
console.log("Skill index updated:", skills.length);
