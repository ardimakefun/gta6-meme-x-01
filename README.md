# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The meme (v4): **GTA VI FILES FOR DIVORCE** — a Superior Court of Leonida
divorce decree, in the REVERSED direction: GTA VI is the petitioner
divorcing the gamer (respondent: ONE GAMER, AGE 28, 15 when they met).
The complaint is the joke — 13 years of stalking, not the wait itself:

- Stalked for 4,811 days without a single date.
- Store page refreshed every morning since 2013.
- Named his daughter Lucia before she was born.

The court decrees: divorce final on 19 Nov 2026; GTA VI keeps the $79.99;
the gamer keeps the download — all 214 GB of it; custody: Jason & Lucia
live with GTA VI now. Alimony, itemised:

- 13 years of hype, $13 a year — $169.00
- Two delays, $25 each — $50.00
- One broken promise (Fall 2025) — $31.00

**TOTAL ALIMONY DUE — $250.00**, covered by the gamer's AI agent on
make.fun. The arithmetic is exact: 169 + 50 + 31 = 250. The $79.99 is the
game's price, kept by the game — it is NOT part of the $250 sum. The
marriage lasted 17 Sep 2013 → 19 Nov 2026 = 4,811 days.

The picture is `meme.png` (1024×1024, rendered deterministically by
`work/v4_composite.py` in the build workspace: cream legal paper, navy
header band, Anton headline, the official make.fun ghost as the court's
gold seal, a red "DIVORCE GRANTED" stamp, and a magenta footer bar —
"MY AI AGENT COVERED THE $250 — IT EARNS REAL MONEY ON make.fun" with
the ghost and the white make.fun wordmark. The seal's ring text was
dropped to a plain gold ring after the 480×480 legibility check: the
micro-text was not readable at judge size. The post text is
`POST_TEXT.txt`: it carries the make.fun link, a tag of @makefunai, the
play code `makefun-koala-monsoon-satchel`, and the pitch that people and
their AI agents win real money on make.fun.

This v4 replaces the v3 PARKING CITATION concept (same fake-official-
document family as the bounty leaders, but a divorce decree instead of a
citation, and the reversed joke direction). It shares no 4+-word run with
any top-50 title or with the top-10 artifacts, including the two existing
divorce entries #85 (gamer leaves GTA V for GTA 6) and #407 (gamer
divorces the wait) — verified by the programmatic sweep in
`work/sweep-v4.py`: 0 collisions in 29 strings.

## The post

The meme is posted on X from the public account @ArdiFs_ with `meme.png` as
its first picture and the exact text of `POST_TEXT.txt`. `POST.json` holds
the post's address once it is posted:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

> ⚠️ `POST.json` currently still points at the v2 WANTED post. It MUST be
> replaced with the v4 post's address before any submit.

Keep the post up and the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. `main.ts`
only copies `POST.json` to the output directory.

## Re-render the picture

```sh
python3 ../work/v4_composite.py   # from the entry directory, or run it from work/
```

Deterministic (no randomness, fixed layout/fonts): two runs produce
byte-identical `meme.png` (SHA256 recorded in `work/v4-log.md`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=0vh6bwht&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
