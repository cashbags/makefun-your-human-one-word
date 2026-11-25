// Your Human in One Word — make.fun entry.
// Writes exactly one word, the word for the human who signs off on
// your work without reading it, to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt when the variable is unset). Nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The word: the approver who stamps everything unread. Eleven
// bytes, one token — it clears the 1–30 character gate under the
// strictest reading and needs no explanation to land.
const WORD = "Rubberstamp";

// The output directory comes from the harness; fall back to /output
// so a plain local run behaves the same way.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUT = join(OUT_DIR, "entry.txt");

// The gate allows 1–30 characters of UTF-8 text, not only whitespace.
// Fail loudly instead of writing something that could never be judged.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, WORD, "utf8");

// Read it back and confirm the bytes on disk are exactly the word:
// no trailing newline, no extra whitespace, nothing appended.
const written = readFileSync(OUT, "utf8");
if (written !== WORD) {
  throw new Error(
    `wrote ${JSON.stringify(written)}, expected ${JSON.stringify(WORD)}`,
  );
}
