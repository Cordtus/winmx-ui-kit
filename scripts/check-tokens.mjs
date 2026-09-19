#!/usr/bin/env node
/* Guards against palette drift between the three hand-maintained adapters. */
import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const tokens = JSON.parse(readFileSync(new URL("tokens.json", root), "utf8"));
const targets = [
  "src/winmx.css",
  "tailwind/winmx-theme.css",
  "tailwind/winmx-preset.cjs",
  "panda/winmx-preset.ts",
];

const unique = [...new Set(Object.values(tokens).map((h) => h.toLowerCase()))];
let failed = false;

for (const file of targets) {
  const text = readFileSync(new URL(file, root), "utf8").toLowerCase();
  const missing = unique.filter((hex) => !text.includes(hex));
  if (missing.length) {
    failed = true;
    console.error(`FAIL ${file}\n  missing: ${missing.join(", ")}`);
  } else {
    console.log(`ok   ${file}`);
  }
}

process.exit(failed ? 1 : 0);
