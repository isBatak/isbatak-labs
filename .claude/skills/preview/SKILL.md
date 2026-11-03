---
name: preview
description: Look at a UI change in the running www site, Panda Studio or Storybook. Use when you need a screenshot, need to check a page renders, or need to start a dev server.
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

- www follows the system color scheme, so `--dark` gives dark mode.
- Studio pages are `http://localhost:6007/#/components/<name>`. The canvas is an iframe that keeps its own color mode,
  toggled in the top bar; `--dark` does not reach it.

Done when you have read the screenshot and it shows the change.
