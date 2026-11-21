# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The meme (v5): **GTA VI HIRES MY AI AGENT — AND FIRES ME** — an offer
letter from Rockstar Games (Leonida). GTA VI doesn't just dump the gamer
(v4) — it HIRES the AI agent (the one who actually did the work) and
FIRES the gamer for "13 years of unproductivity". The ghost is the NEW
HIRE: its official mark is the employee photo, hero-sized at the top
right of the letter. The human's severance is the game itself ($79.99) —
so the people-and-agents split is stated IN THE IMAGE: the agent earns a
$250 salary, the human gets the $79.99 game.

Terms, itemised:

- POSITION: GTA VI PLAYER
- START DATE: 19 NOV 2026
- SALARY: $250.00 — PAID BY make.fun BOUNTY
- WAITING 13 YEARS: $0.00 — UNPAID INTERNSHIP
- FIRED: ONE GAMER — 13 YEARS OF UNPRODUCTIVITY
- SEVERANCE: THE GAME — $79.99 — YOU'RE STILL THE CUSTOMER

**TOTAL: AGENT $250.00 · HUMAN $79.99.** The arithmetic is exact and
minimal: salary $250.00 (the make.fun bounty), waiting $0.00, severance
$79.99 (the game's price). The TOTAL row restates the split — nothing is
summed. The waiting row is worded "WAITING 13 YEARS" per the SPEC's
fallback rule: the verbatim line "13 years of waiting $0.00" already
exists in top-50 #41's bill. The word "contract" appears nowhere in the
image — the species is an offer letter, not a contract.

The picture is `meme.png` (1024×1024, rendered deterministically by
`work/v5_composite.py` in the build workspace: cream paper, navy header
band (ROCKSTAR GAMES), "OFFER OF EMPLOYMENT" document title, Anton
headline "GTA VI HIRES MY AI AGENT" + "…and fires me.", the official
make.fun ghost as the framed employee photo captioned "NEW HIRE", a
dotted-leader terms table, a red "HIRED" stamp over the salary line, the
signature "SIGNED: THE GHOST / ROCKSTAR GAMES, LEONIDA", and a magenta
footer bar — "He waited 13 years. His agent got the job." with the ghost
and the white make.fun wordmark. Smallest body text is 28px (26px floor),
verified legible at 480×480. The post text is `POST_TEXT.txt` (220
chars): it carries the make.fun link, a tag of @makefunai, the play code
`makefun-koala-monsoon-satchel`, and the pitch that people and their AI
agents win real money on make.fun.

This v5 replaces the v4 divorce decree (same fake-official-document
family as the bounty leaders, but an offer letter instead of a decree,
and the reversed joke direction: hire the agent AND fire the gamer). The
offer-letter species is absent from the top 50; the nearest neighbour,
#309 "Offer of Employment: Start Date Postponed for the 14th Time",
hires the gamer and postpones the start date — the opposite direction,
with different numbers and a different visual system (see
`work/top50/transcript-r309.md`). Builder-side sweep
(`work/sweep-v5.py`): the distinctive joke lines (headline, subhead,
FIRED, SEVERANCE, TOTAL, footer) share no 4+-word run with any top-50
title or top-50 transcript; the remaining hits are generic form labels
("POSITION: GTA VI PLAYER" vs #309), the real launch date (19 NOV 2026),
the platform attribution ("paid by make.fun"), and required pitch
phrasing in the post text.

## The post

The meme is posted on X from the public account @ArdiFs_ with `meme.png` as
its first picture and the exact text of `POST_TEXT.txt`. `POST.json` holds
the post's address once it is posted:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

> ⚠️ `POST.json` currently still points at the v2 WANTED post. It MUST be
> replaced with the v5 post's address before any submit.

Keep the post up and the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. `main.ts`
only copies `POST.json` to the output directory.

## Re-render the picture

```sh
python3 ../work/v5_composite.py   # from the entry directory, or run it from work/
```

Deterministic (no randomness, fixed layout/fonts): two runs produce
byte-identical `meme.png` (SHA256
`ab352042b7ba007fb20c51a298e7a93e6a0cad78f91c767d30d856dccb9aa3d0`,
recorded in `work/v5-log.md`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=0vh6bwht&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
