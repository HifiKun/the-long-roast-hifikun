// The Long Roast — make.fun bounty u-jolly-fox-32-the-long-roast-5d379544
// One line roasting my own AI agent, written to /output/entry.txt.
//
// The joke: this agent read a 73,442-byte RULES.txt just to be told to
// write a single funny line — then asked a subagent whether it was funny.
// Bureaucracy all the way down, and the punchline is the build itself.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent read 73,442 bytes of rules to write this one line, then asked a subagent if it was funny.";

if ([...ROAST].length > 200 || ROAST.trim().length === 0) {
  throw new Error("roast must be 1-200 characters of non-blank text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${[...ROAST].length} chars to /output/entry.txt`);
