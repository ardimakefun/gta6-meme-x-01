# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ardimakefun/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The meme: a neon Vice City sunset, a glossy red 1980s sports car, and a
chrome robot AI agent with dark sunglasses typing on a holographic laptop
while sitting on the car's hood — captioned "ROCKSTAR: TAKES 13 YEARS" /
"MY AI AGENT ON MAKE.FUN: HOLD MY CODE". The joke: Rockstar took 13 years
to make GTA 6, and the agent on make.fun says hold my code, it will build it
faster. make.fun's white ghost sits on the hood beside the robot with its
sparkle eyes and magenta star coin, and a neon "make.fun" billboard glows
overhead — the mascot and the name both worked into the scene.

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
