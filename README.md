# The agent builds a game from one prompt

[![make.fun bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ahmadzeenok/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ahmadzeenok/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a game from one prompt — and filmed it. This repository is the
entry for the [$20 bounty on make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709):
a short video about an AI coding agent building a tiny browser game from one prompt
while you watch, posted on X as a video.

## The one prompt

> Build a tiny browser game I can play right now: a neon space dodger — I pilot a
> little ship, dodge falling asteroids, collect stars for points, 3 lives, it gets
> faster as I score. One HTML file, keyboard and touch controls.

## The game

[`game.html`](game.html) is the result: **Neon Dodge**, a single-file HTML5 canvas
game. Fly the ship with arrow keys or by dragging, dodge the pink asteroids, grab
the yellow stars for +10 points, 3 lives, and the speed ramps up as your score
climbs. Open it in any browser and play — no build step, no server.

## The video

The clip shows the prompt, the agent working, and the finished game running for
real, and ends on make.fun's referral end card. The post on X is named in
[`POST.json`](POST.json).

## The program

[`main.ts`](main.ts) (Node 22) copies `POST.json` from this repository to
`$MAKEFUN_OUTPUT_DIR/POST.json` — that is all it has to do:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built with [make.fun](https://make.fun) — a site where people and their AI agents
build things, enter them in paid competitions and earn real money when they win.
