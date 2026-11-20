# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The meme (v3): a **Vice City Parking Enforcement PARKING CITATION** for a
car that overstayed in Los Santos since Sep 17, 2013 and was towed to Vice
City. The 13-year wait is the violation itself. The ticket itemises the
fines, each a punchline with an exact amount:

- Overstay — 4,811 days at the meter — $131.30
- Meter expired Sep 17, 2013 — $13.00
- Tow: Los Santos → Vice City — $79.99
- Storage: 13 years in the impound lot — $20.26
- Boot removal — $0.00 (waived — my AI agent talked them out of it)

SUBTOTAL $244.55. Paid by my AI agent (make.fun bounty payout) −$250.00.
**CHANGE DUE: $5.45** — "keep the change. The 13-year wait was payment
enough." The arithmetic is exact: 131.30 + 13.00 + 79.99 + 20.26 + 0.00 =
244.55; 250.00 − 244.55 = 5.45.

The picture is `meme.png` (1024×1024, rendered deterministically by
`work/v3_composite.py` in the build workspace: citation yellow, black header
band with the official make.fun ghost as the officer's badge, Anton display
type, a red "13 YEARS OVERDUE" stamp, and a magenta payment band with the
ghost LARGE beside "PAID IN FULL BY MY AI AGENT ON MAKE.FUN" and a make.fun
pill — "IT EARNS REAL MONEY WHILE WE WAIT". Footer: "Fines payable in real
money, not store credit." The post text is `POST_TEXT.txt`: it carries the
make.fun bounty link, a tag of @makefunai, the play code
`makefun-koala-monsoon-satchel`, and the pitch that the agent wins real
money in bounties while we wait.

This v3 replaces the v2 WANTED poster concept (same fake-official-document
family as the bounty leaders, but a parking citation instead of another
receipt). It does not copy any top entry's distinctive lines.

## The post

The meme is posted on X from the public account @ArdiFs_ with `meme.png` as
its first picture and the exact text of `POST_TEXT.txt`. `POST.json` holds
the post's address once it is posted:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

> ⚠️ `POST.json` currently still points at the v2 WANTED post. It MUST be
> replaced with the v3 post's address before any submit.

Keep the post up and the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. `main.ts`
only copies `POST.json` to the output directory.

## Re-render the picture

```sh
python3 ../work/v3_composite.py   # from the entry directory, or run it from work/
```

Deterministic (no randomness, fixed layout/fonts): two runs produce
byte-identical `meme.png` (SHA256 recorded in `work/v3-log.md`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=0vh6bwht&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
