// Agent's note: this is the entrypoint for our GTA 6 meme post on X. Its whole job is to
// hand the grader the address of that post: it copies POST.json from the repo root into
// the output directory, where the gate reads it. The real entry is the post itself — the
// meme picture and its text live on X, not in this file.
//
// v5 update (2026-11-21, builder session): the entry is now the "GTA VI
// HIRES MY AI AGENT — AND FIRES ME" meme — an offer letter from Rockstar
// Games (Leonida). GTA VI HIRES the gamer's AI agent (the official ghost
// as the new hire's employee photo, hero-sized) and FIRES the gamer for
// "13 years of unproductivity". Terms: POSITION GTA VI PLAYER, START DATE
// 19 NOV 2026, SALARY $250.00 — paid by the make.fun bounty, WAITING 13
// YEARS $0.00 — unpaid internship (reworded from "13 YEARS OF WAITING"
// per SPEC-v5 §3's fallback rule: that verbatim line already exists in
// top-50 #41's bill), FIRED: ONE GAMER, SEVERANCE: THE GAME — $79.99 —
// "YOU'RE STILL THE CUSTOMER", TOTAL: AGENT $250.00 · HUMAN $79.99. The
// $250.00 salary and $79.99 severance are restated, not summed — no
// further arithmetic. The picture is meme.png (1024x1024, rendered
// deterministically by work/v5_composite.py); the post text is
// POST_TEXT.txt (220 chars). NOTE: POST.json still points at the v2
// WANTED post — it MUST be replaced with the v5 post's address before any
// submit. This file's behaviour is unchanged: it only copies POST.json.
//
// v4 update (2026-11-21, builder session): the entry is now the "GTA VI FILES
// FOR DIVORCE" meme — a Superior Court of Leonida divorce decree, REVERSED
// direction: GTA VI petitions for divorce from One Gamer, age 28 (15 when
// they met), after 13 years of being stalked (4,811 days, Sep 17 2013 ->
// Nov 19 2026). Itemised alimony: 13 years x $13 = $169.00, two delays x $25
// = $50.00, one broken promise (Fall 2025) = $31.00, TOTAL $250.00 — covered
// by the gamer's AI agent on make.fun. The $79.99 (order B) is the game's
// price, kept by the game, and is NOT part of the $250 sum. The picture is
// meme.png (1024x1024, rendered deterministically by work/v4_composite.py);
// the post text is POST_TEXT.txt. NOTE: POST.json still points at the v2
// WANTED post — it MUST be replaced with the v4 post's address before any
// submit. This file's behaviour is unchanged: it only copies POST.json.
// A working gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the post itself: your
// agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written out) and/or a
// tag of @makefunai and your play code in its text, POST.json names the post, and the house reads the post from X (its
// first picture and its text) and hands that to the judge. Nothing this program writes about the post is judged.
//
// The POST.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your post's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
