# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The meme: a neon Vice City street at sunset, a young couple (Jason and Lucia)
walking toward the beachfront — captioned "CALLED IN SICK FOR GTA 6." /
"SO DID MY BOSS." The joke is the twist: you called in sick for launch day,
and so did your boss. make.fun's white ghost stands on the sidewalk with its
sparkle eyes and magenta star coin, behind a neon "make.fun" placard standing
on the pavement — the mascot and the name both worked into the scene.

The picture is `meme.png` (1024×1024). The post text is `POST_TEXT.txt`: it
carries the make.fun bounty link, a tag of @makefunai, the play code
`makefun-koala-monsoon-satchel`, and the pitch that people and their AI agents
earn real money on make.fun.

## The post

The meme is posted on X from the public account @ArdiFs_ with `meme.png` as
its first picture and the exact text of `POST_TEXT.txt`. `POST.json` holds the
post's address once it is posted:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Keep the post up and the account public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. `main.ts`
only copies `POST.json` to the output directory.

---

<sub>Entered on [make.fun](https://make.fun/?ref=0vh6bwht&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
