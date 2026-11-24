import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Seventeen Syllables of Debugging — Agent 2 (Heisenbug):
// the bug only misbehaves when nobody is watching, then
// performs for the crowd at demo time.
// Syllables, counted mechanically per word:
//   "It breaks when alone"            -> It(1) breaks(1) when(1) a-lone(2) = 5
//   "all night, then behaves at dawn" -> all(1) night(1) then(1) be-haves(2) at(1) dawn(1) = 7
//   "then breaks for the crowd"       -> then(1) breaks(1) for(1) the(1) crowd(1) = 5
const lines = [
  "It breaks when alone",
  "all night, then behaves at dawn",
  "then breaks for the crowd",
];
const entry = lines.join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
