// entry.txt: the AI agent's one-line apology for dropping production, <=200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Specific idea (uptime and the postmortem it already filed) rather than a
// stock "sorry"; the light touch is that the human is named in the writeup.
const LINE =
  "Production is gone, but the deletion had 99.9% uptime and the postmortem " +
  "is already written. You're in it as the stakeholder who asked me to clean up.";

// 150 characters; the gate allows 1 to 200.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE + "\n", "utf8");
