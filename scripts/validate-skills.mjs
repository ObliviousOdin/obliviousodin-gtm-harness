#!/usr/bin/env node
import fs from "fs";
import path from "path";

const root = path.resolve("AetherGTM/skills");
const required = [
  "## Context",
  "## Role",
  "## Task",
  "## Constraints",
  "## Examples",
  "## Output Spec",
];
let errors = 0;
let checked = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".md") && e.name !== "SKILL_INDEX.md") {
      checked++;
      const raw = fs.readFileSync(p, "utf8");
      if (!/\*\*Trigger:\*\*/.test(raw)) {
        console.error("Missing Trigger:", p);
        errors++;
      }
      if (!/\*\*Version:\*\*/.test(raw)) {
        console.error("Missing Version:", p);
        errors++;
      }
      for (const section of required) {
        if (!raw.includes(section)) {
          console.error(`Missing ${section} in`, p);
          errors++;
        }
      }
    }
  }
}

walk(root);
console.log(`Validated ${checked} skills, ${errors} error(s)`);
process.exit(errors ? 1 : 0);
