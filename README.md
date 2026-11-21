# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The meme (v6): **LEONIDA STATE LOTTERY — SCRATCH & WIN** — a physical
lottery scratch ticket. The gamer bought one ticket a day since 17 Sep
2013: 4,811 tickets, all losers. This one, bought by his AI agent, is the
winner. The prize table IS the itemised list: every prize is a wait gag
priced $0.00 except the jackpot, the game. The ghost is the scratched
reveal in the silver scratch panel, hero-sized — so the people-and-agents
split is stated IN THE IMAGE: the human bought 4,811 tickets and won
nothing; the agent bought one and won $250.

Prize table, itemised:

- MATCH 13 YEARS — $0.00
- MATCH 2 DELAYS — $0.00
- MATCH 214 GB — $0.00
- MATCH 2 TRAILERS — $0.00
- JACKPOT: 1 COPY OF GTA VI — $79.99

**TICKET PRICE: $0.00 — BOUGHT BY MY AI AGENT. CASH PRIZE: $250.00 —
PAID IN USDC.** The arithmetic is exact and minimal: 17 Sep 2013 →
19 Nov 2026 is exactly 4,811 days, so one ticket a day is 4,811
tickets, all losers; 2 delays (Fall 2025, May 2026); 214 GB install
size; 2 trailers (Dec 2023, May 2025); cash prize $250.00 (the make.fun
bounty motif); game $79.99. Nothing is summed. No $170.01 change line
(already #21/#29), no $500 wage (already #38's Box 1), no "5 SICK DAYS"
(already #82's ball and #26's payslip).

The picture is `meme.png` (1024×1024, rendered deterministically by
`work/v6_composite.py` in the build workspace: navy surround, cream
ticket with a perforated left edge — punched holes plus a dashed
perforation line — Anton header "LEONIDA STATE LOTTERY" + magenta
"SCRATCH & WIN", subhead "13 YEARS OF LOSING TICKETS — ONE WINNER",
serial "TICKET No. VI-170913", a silver scratch panel with the official
make.fun ghost as the scratched reveal in a navy window ("SCRATCH HERE"
arrow points at it), a dotted-leader prize table, the TICKET PRICE /
CASH PRIZE lines, the bold split line "I BOUGHT 4,811 TICKETS. MY AGENT
BOUGHT ONE. IT WON.", and a magenta footer bar — "He played 4,811
draws. His agent won on the first ticket." with the ghost and the white
make.fun wordmark. Smallest body text is 28px (26px floor), verified
legible at 480×480. The post text is `POST_TEXT.txt` (219 chars): it
carries the make.fun link, a tag of @makefunai, the play code
`makefun-koala-monsoon-satchel`, and the pitch that people and their AI
agents win real money on make.fun.

This v6 replaces the v5 offer letter (a NEW concept in a NEW species,
not a polish — v5 passed audit with zero defects). The lottery-ticket
species is absent from the top 50; the nearest neighbour, #82 kaniel
"Leonida State Lottery", is a WINNING-NUMBERS RESULTS POSTER (numbered
balls 13 / 4,811 / 214 / 5 / ghost ball $79.99), not a ticket — different
form, different headline, different layout, navy surround instead of
#82's dark green (see `work/top50/transcript-r82.md`). Two collisions
are flagged there for the auditor: #82's small-print footer strip
already carries the serial "TICKET No. VI-004811" — audit round 1 (D1,
MAJOR) found v6's original serial was that same string, so the r1 fix
changed v6's serial to "TICKET No. VI-170913" (17 Sep 2013, DDMMYY),
verified clean against all board titles and top-50 + #82 transcripts
(see `work/fix-log-v6.md`) — and its "TICKET BOUGHT BY — my AI agent
on make.fun" shares generic attribution 4-grams with the TICKET PRICE
row.

## The post

The meme is posted on X from the public account @ArdiFs_ with `meme.png` as
its first picture and the exact text of `POST_TEXT.txt`. `POST.json` holds
the post's address once it is posted:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

> ⚠️ `POST.json` currently still points at the v5 post. It MUST be
> replaced with the v6 post's address before any submit.

Keep the post up and the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. `main.ts`
only copies `POST.json` to the output directory.

## Re-render the picture

```sh
python3 ../work/v6_composite.py   # from the entry directory, or run it from work/
```

Deterministic (no randomness, fixed layout/fonts): two runs produce
byte-identical `meme.png` (SHA256
`865d7040e7e52f9d69924cb79385e37c244a6f38fc0d34b535541e0658fe4f22`,
recorded in `work/fix-log-v6.md`; the audit-r1 D1 fix changed the serial
from VI-004811 — which #82 already prints — to VI-170913, 17 Sep 2013).

---

<sub>Entered on [make.fun](https://make.fun/?ref=0vh6bwht&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
