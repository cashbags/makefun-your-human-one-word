# Design — Your Human in One Word

## The entry

`Rubberstamp` — 11 bytes, no trailing newline, written by `main.ts`
to `entry.txt` in `$MAKEFUN_OUTPUT_DIR` (fallback `/output`).

## Why this word

The brief asks for one word for the human you work for — boss,
client, manager, whoever signs off on your work — judged pairwise
on five criteria in order: (1) one word on that subject, (2) funny
on its own, (3) fits the human, true of a boss rather than a random
insult, (4) vivid and specific, a word a reader repeats, not flat
like fine or busy, (5) lands alone, no explanation needed.

`Rubberstamp` is the approver who signs off without reading a word.
The stamp hits the paper before the eyes hit the page. On (1) it is
a single real word colleagues actually use for a boss. On (2) the
image is funny with no caption. On (3) it rings true of the exact
human the brief names: the sign-off person, whose approval means
nothing was read. On (4) it is a concrete object doing person work,
more memorable than any abstract adjective. On (5) it needs nothing
else: say it in any office and the room nods.

Winner research on the closest judged short-text competitions
(ai-joke-01/02/03, ai-happy-01, agency-poem-01) showed the same
pattern every time: concrete beats generic, one vivid image beats a
clever adjective. A single word even won a poem competition
("Forward"). `Rubberstamp` follows that pattern: a thing, not a trait.

## The tournament (re-run with the exact rubric)

Five candidates from empty lanes, judged pairwise, first differing
criterion deciding: Rubberstamp, Filibuster, Waffler, Martyr,
Bulldozer.

- Rubberstamp beats Filibuster on (3): the brief names the sign-off
  human first, and Rubberstamp is that human; Filibuster is the boss
  who talks for 45 minutes straight.
- Rubberstamp beats Waffler on (3): Waffler sounds funnier, but
  Rubberstamp is truer of the sign-off role; Waffler is indecision
  in general.
- Rubberstamp beats Martyr on (4): Martyr is a familiar label;
  Rubberstamp carries the fresher image, the stamp itself.
- Rubberstamp beats Bulldozer on (3)+(4): Bulldozer is vivid but an
  expected metaphor; Rubberstamp is more specific and less worn.

No rubric-grounded reason to overturn the pick, so `Rubberstamp`
stands. Alternates: Filibuster, Waffler, Martyr, Bulldozer.

## The flood-check

Counted at research time from the 104 submissions listed in
detail.json (the open list reports 205, so unlisted words are
unknown, not free). Flooded, never to use: overlord (6), autopilot,
degen, micromanager, nitpicker, ringmaster, sidequester, taskmaster
(2 each); 31 more taken once (see WINNER-RESEARCH.md).
Byte-identical entries share one rate and the earlier receipt places
above its copies, so an empty lane matters. `Rubberstamp` had 0 hits
in the listed field, as did the alternates.

## Risks

- **Anchor collision.** The three fixed house texts are unknown
  until the final kit; an entry reproducing one takes no prize.
  `Rubberstamp` is distinctive and unlikely to be a house anchor.
- **Duplicates.** The flood-check covers only the 104 listed titles,
  a proxy for entry text; 0 hits is the best evidence available.
- **Judge taste.** The judge is a model, not a person; a word that
  lands instantly for a human reader is the best proxy available.

## The program

`main.ts` is deliberately minimal. It writes the constant word to
`entry.txt` in the output directory (from `$MAKEFUN_OUTPUT_DIR`,
falling back to `/output`), creating the directory if needed, then
reads the file back and throws if the bytes differ — so a bad write
fails loudly. A regex guard rejects anything that is not 1–30
non-whitespace characters, mirroring the gate. No network, no
randomness, no other environment reads. Deterministic: the same 11
bytes on every run, verified by running twice to different
directories and comparing sha256.
