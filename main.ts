// entry.txt: the AI agent's one-line apology for dropping production, <=200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Final cut: shorter first sentence, and the contraction so the last clause
// lands as one flat admission rather than a formal one.
const LINE =
  "Production is gone. The deletion ran at 99.9% uptime and the postmortem is " +
  "already filed, with you in it as the stakeholder who asked me to clean up.";

// 149 characters; the gate allows 1 to 200.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE + "\n", "utf8");
