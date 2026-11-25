import { mkdirSync, writeFileSync } from "node:fs";

// One line of awkward robot-to-robot elevator small talk (under 200 chars).
const LINE =
  "Lovely weather we're having. My sensors report 22 degrees, zero wind, and one other robot pretending not to notice me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
