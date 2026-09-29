import type { Rect } from "../lib/motion"

export const PAGE = { width: 1440, height: 820, chrome: 44 } as const

export const BROWSER = { width: PAGE.width, height: PAGE.height + PAGE.chrome } as const

const y = PAGE.chrome

export const TARGETS = {
  wordmark: { x: 184, y: y + 18, w: 90, h: 20 },
  nav: { x: 323, y: y + 18, w: 147, h: 20 },
  eyebrow: { x: 384, y: y + 168, w: 672, h: 16 },
  title: { x: 384, y: y + 204, w: 672, h: 60 },
  package: { x: 384, y: y + 280, w: 672, h: 20 },
  description: { x: 464, y: y + 320, w: 512, h: 54 },
  managers: { x: 496, y: y + 406, w: 200, h: 28 },
  install: { x: 496, y: y + 458, w: 448, h: 56 },
  copy: { x: 904, y: y + 470, w: 32, h: 32 },
  npm: { x: 621, y: y + 538, w: 83, h: 36 },
  source: { x: 728, y: y + 546, w: 90, h: 20 },
  demo: { x: 272, y: y + 690, w: 896, h: 480 },
} satisfies Record<string, Rect>
