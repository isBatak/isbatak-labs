export const VIDEO = {
  fps: 60,
  duration: 756,
  square: { width: 1920, height: 1440 },
  wide: { width: 1920, height: 1080 },
  tall: { width: 1080, height: 1920 },
} as const

export type Shape = "square" | "wide" | "tall"

export const shapeOf = (width: number, height: number): Shape =>
  height > width ? "tall" : width / height > 1.5 ? "wide" : "square"

export const LAYOUT = {
  square: { zoom: 1.4, magnify: 3.6, compare: 2, top: 0.4, compareTop: 0.5, toggleTop: 0.8, toggleZoom: 1.5 },
  wide: { zoom: 1.3, magnify: 4.6, compare: 2, top: 0.4, compareTop: 0.52, toggleTop: 0.84, toggleZoom: 1.4 },
  tall: { zoom: 1.2, magnify: 2.5, compare: 2, top: 0.42, compareTop: 0.5, toggleTop: 0.6, toggleZoom: 1.6 },
} as const

export const md = { border: 1, padding: 16, height: 40, icon: 20, iconTop: 10, offset: 4 }
export const plusInk = (md.icon * 5.25) / 24

export const px = (value: number) => `${Number(value.toFixed(1))}px`

export const T = {
  boxGuides: 60,
  iconBox: 120,
  emptyNote: 150,
  inkGuides: 180,
  reach: 252,
  click: 288,
  slide: 294,
  settled: 330,
  release: 360,
  guidesOut: 474,
  shrink: 492,
  shrunk: 528,
  compare: 528,
  compared: 564,
} as const
