---
name: preview
description: Look at or drive a UI change in the running www site, Panda Studio or Storybook. Use when you need a screenshot, need to click or hover before one, catch an animation mid-transition, measure an element's box, or start a dev server.
---

## 1. Find the server

| App        | Port | Start                                 |
| ---------- | ---- | ------------------------------------- |
| www        | 3000 | `pnpm --filter @isbatak/website dev`  |
| studio     | 6007 | `pnpm studio` (www config)            |
| studio     | 6007 | `pnpm studio:<theme>` (that theme)    |
| storybooks | 6006 | `pnpm storybook`                      |

Check the port first: `lsof -nP -iTCP:<port> -sTCP:LISTEN`. A listener means the user's server is up: use it, and leave
it running. The studio takes the next free port when 6007 is busy, so a second `pnpm studio` lands on 6008 beside the
user's. Start a server only when nothing listens, in the background, and stop it when you're done.

## 2. Screenshot

```sh
node scripts/shot.mjs <url> <out.png> [--dark] [--mobile] [--full] [--element <selector>] [--wait <ms>]
```

Run it from the repo root and write into your scratchpad. It prints page errors and console errors, so a blank shot
comes with its cause. `--mobile` is 390×844; `--element` shoots one element, scrolled into view.

Drive the page before the shot instead of writing a Playwright script:

- `--hover <selector>`, then `--click <selector>` (repeatable, in order), then `--after <ms>` (default 500) to settle.
- `--frames 0,150,400` shoots at those ms after the actions, to `<out>-<ms>.png`: an animation mid-transition.
- `--eval '<js expression>'` prints the result as JSON, and `out.png` becomes optional. Measure with
  `el.getBoundingClientRect().toJSON()`.

- www follows the system color scheme, so `--dark` gives dark mode.
- Studio pages are `http://localhost:6007/#/components/<name>`. The canvas is an iframe that keeps its own color mode,
  toggled in the top bar; `--dark` does not reach it.

Done when you have read the screenshot and it shows the change.
