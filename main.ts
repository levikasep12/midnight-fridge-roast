// Midnight Fridge Roast — make.fun entry for
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
// Writes the entry's single roast line to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no secrets,
// no environment reads, no randomness, no dependency on process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";

// The line: the fridge's petty midnight rule is the target — it locks, then
// taunts with its own lit screen, and the punchline reframes it as a bouncer
// with a menu. One tight line, spoken aloud at the door.
const LINE =
  "The fridge locks at midnight, then lights up its screen to show me the cake I can't have. It's not an appliance, it's a bouncer with a menu.";

// The gate allows 1 to 200 characters: refuse to emit a line that would fail it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
