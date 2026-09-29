import { ease, inflate, mixRect, tween } from "../lib/motion"
import { BROWSER } from "../site/layout"
import type { Stage } from "../stage/context"
import { hookRect } from "../stage/hook"
import { T } from "../theme"

export function getReveal({ frame, viewport, screen }: Stage) {
  const browserRect = screen({ x: 0, y: 0, w: BROWSER.width, h: BROWSER.height })
  const expand = tween(frame, T.hookExpand, 14, ease.inOut)
  const hookBox = hookRect(viewport)
  const wordIndex = frame >= T.hookWords[2] ? 2 : frame >= T.hookWords[1] ? 1 : 0
  const wordAt = T.hookWords[wordIndex]
  const punch = 1 - tween(frame, wordAt, 8, ease.out)
  const rect = mixRect(inflate(hookBox, punch * 10), browserRect, expand)
  return { hookBox, wordIndex, punch, rect }
}
