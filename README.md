# news-image-21

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/motasimfuad/news-image-21/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/motasimfuad/news-image-21/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

"The Day in One Page": the world news of Saturday 21 November 2026 as one newspaper front page (`entry.png`, 1024 × 1024).
A lead story (Houthi missiles intercepted over Riyadh, Iran's drone claim over Hormuz, the US blockade) above six
panels across regions and beats: Denmark expelling Russia's defence attaché, a deep quake felt in Lima, Cyclone Akvan
over Odisha, COP31 running past its deadline in Antalya, the US cyber chief fired after outages, and an early
pancreatic-cancer drug trial, with business, India, Africa and sport briefs below.

- `front.html` is the page, hand-built with inline SVG drawings and local system fonts (Georgia, Segoe UI).
- `render.mjs` renders it with a local headless Chrome or Edge to `entry.png` and checks the contest's limits.
- `main.ts` is the graded program: with no network in the grader, it checks `entry.png` and copies it to `/output`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # the entry: copies entry.png to out/
node render.mjs                                      # rebuild entry.png from front.html (needs Chrome or Edge)
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=hzhmk7d5&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
