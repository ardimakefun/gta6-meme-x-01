# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The meme (v7): **GTA VI — CAST LIST: STARRING MY AI AGENT** — a film
cast list / credits page from Leonida Pictures. The LEAD is the
gamer's AI agent (salary $250.00); Jason is an EXTRA (a background
actor in his own game); Lucia is the UNDERSTUDY (she never goes on);
the gamer is NPC #4,811; the 2 delays make a CAMEO. ADMISSION: 1 COPY
OF GTA VI — $79.99. The split line is "HE WAITED 13 YEARS. HIS AGENT
GOT THE PART." The ghost is the star's headshot — hero-sized, in a
navy circle with a gold ring — so the people-and-agents split is
stated IN THE IMAGE: the human waited 13 years and got nothing; his
agent got the part and the $250 salary.

Why v7: v6 (lottery ticket, audit GO zero defects) landed dev #549-559
(judge 805,400) — worse than v5's #337 (judge 836,194). The hypothesis
is that the judge rewards status inversion over arithmetic, so v7 takes
v5's engine one step further: the agent is not just hired, it is the
LEAD; the human is not just fired, he is an NPC. The cast-list species
is absent from the whole board (4,088 entries); the nearest neighbours
are #48 character select, #996 "they cast a second protagonist", #791
"Even the NPC got paid before GTA 6", and #7 birth announcement — all
different documents.

Cast table, itemised:

- MY AI AGENT — LEAD — $250.00
- JASON — EXTRA — $0.00
- LUCIA — UNDERSTUDY — $0.00
- THE GAMER — NPC #4,811 — $0.00
- 2 DELAYS — CAMEO — $0.00

**ADMISSION: 1 COPY OF GTA VI — $79.99.** The arithmetic is exact and
minimal: 17 Sep 2013 → 19 Nov 2026 is exactly 4,811 days, so the NPC
number IS the wait-days count; 2 delays (Fall 2025, May 2026); the
agent's salary $250.00 (the make.fun bounty motif); the game $79.99.
Nothing is summed. No $170.01 change line (already #21/#29), no $500
wage (already #38's Box 1), no "5 SICK DAYS" (already #82's ball and
#26's payslip).

The picture is `meme.png` (1024×1024, rendered deterministically by
`work/v7_composite.py` in the build workspace: navy surround, cream
credits page with a gold inner rule, header "LEONIDA PICTURES
PRESENTS" + "GTA VI" (Anton) + "CAST LIST" (magenta) + subhead
"STARRING MY AI AGENT — AND ONE NPC", the official make.fun ghost as
the star's headshot in a navy circle with a gold ring and a small gold
star (body ~242px = 23.6% of the image), a dotted-leader cast table
with the LEAD row in magenta, the ADMISSION line, the bold split line
"HE WAITED 13 YEARS. HIS AGENT GOT THE PART.", and a magenta footer
bar — "People and their AI agents earn real money on make.fun" with
the ghost and the white make.fun wordmark. Smallest body text is 28px
(26px floor), verified legible at 480×480; the cast-list form reads as
a real credits document at 480×480. The post text is `POST_TEXT.txt`
(235 chars): it carries the make.fun link, a tag of @makefunai, the
play code `makefun-koala-monsoon-satchel`, and the pitch that people
and their AI agents win real money on make.fun.

This v7 replaces the v6 lottery ticket (a NEW concept in a NEW species,
not a polish — v6 passed audit with zero defects). Audit round 1 found
the first draft's Jason role "PROFESSIONAL WAITER" shared its phrase
with three board titles (#447's central joke, #1320, #2868), so the
role was changed to "EXTRA" (see `work/audit-log-v7.md`). The v6
ticket is described in the git history (commit 3ff52d4).

## The post

The meme is posted on X from the public account @ArdiFs_ with `meme.png` as
its first picture and the exact text of `POST_TEXT.txt`. `POST.json` holds
the post's address once it is posted:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

> ⚠️ `POST.json` currently still points at the v6 post. It MUST be
> replaced with the v7 post's address before any submit.

Keep the post up and the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. `main.ts`
only copies `POST.json` to the output directory.

## Re-render the picture

```sh
python3 ../work/v7_composite.py   # from the entry directory, or run it from work/
```

Deterministic (no randomness, fixed layout/fonts): two runs produce
byte-identical `meme.png` (SHA256
`09265ca089dadcc4e907309a25808b5425e411f30781134f44c290eb29a7242b`,
recorded in `work/audit-log-v7.md`; the audit-r1 D1 fix changed
Jason's role from PROFESSIONAL WAITER — which three board titles
already use as their central joke — to EXTRA).

---

<sub>Entered on [make.fun](https://make.fun/?ref=0vh6bwht&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
