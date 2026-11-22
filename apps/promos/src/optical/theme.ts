import { z } from "zod"

export const VIDEO = {
  fps: 60,
  duration: 1585,
} as const

export const SCENES = {
  measure: { from: 0, duration: 360 },
  compare: { from: 348, duration: 190 },
  endIcon: { from: 526, duration: 230 },
  grid: { from: 744, duration: 180 },
  kbd: { from: 912, duration: 345 },
  stacked: { from: 1245, duration: 340 },
} as const

export const SIZE = {
  square: { width: 1920, height: 1440 },
  wide: { width: 1920, height: 1080 },
  tall: { width: 1080, height: 1920 },
} as const

export type Shape = keyof typeof SIZE

export const shapeOf = (width: number, height: number): Shape =>
  height > width ? "tall" : width / height > 1.5 ? "wide" : "square"

export const LAYOUT = {
  square: {
    titleTop: 0.12,
    grid: 11,
    kbd: 5.5,
    stack: 2.3,
    kbdTop: 0.42,
    stackTop: 0.46,
    zoom: 1.4,
    magnify: 3.6,
    compare: 3,
    top: 0.4,
    centerTop: 0.55,
    toggleTop: 0.8,
    toggleZoom: 2,
  },
  wide: {
    titleTop: 0.11,
    grid: 9,
    kbd: 4.5,
    stack: 2,
    kbdTop: 0.44,
    stackTop: 0.46,
    zoom: 1.3,
    magnify: 4.6,
    compare: 3,
    top: 0.4,
    centerTop: 0.55,
    toggleTop: 0.84,
    toggleZoom: 1.9,
  },
  tall: {
    titleTop: 0.14,
    grid: 13,
    kbd: 3.6,
    stack: 2.2,
    kbdTop: 0.42,
    stackTop: 0.42,
    zoom: 1.2,
    magnify: 2.5,
    compare: 2.6,
    top: 0.42,
    centerTop: 0.55,
    toggleTop: 0.6,
    toggleZoom: 2.1,
  },
} as const

export const md = { border: 1, padding: 16, height: 40, icon: 20, iconTop: 10, offset: 4 }
export const plusInk = (md.icon * 5.25) / 24
export const arrowInk = (md.icon * 4.25) / 24

export const key = { border: 1, padding: 4, icon: 16, iconTop: 3.5, iconBottom: 4.5 }
export const keyAir = (units: number) => (key.icon * units) / 24

export const px = (value: number) => `${Math.round(value)}px`

export const timingSchema = z.object({
  measure: z.object({
    boxGuides: z.number().int().min(0),
    iconBox: z.number().int().min(0),
    emptyNote: z.number().int().min(0),
    inkGuides: z.number().int().min(0),
    change: z.number().int().min(0),
    slide: z.number().int().min(1),
    guidesOut: z.number().int().min(0),
  }),
  compare: z.object({
    equal: z.number().int().min(0),
    optical: z.number().int().min(0),
    callouts: z.number().int().min(0),
  }),
  endIcon: z.object({
    boxGuides: z.number().int().min(0),
    iconBox: z.number().int().min(0),
    emptyNote: z.number().int().min(0),
    inkGuides: z.number().int().min(0),
  }),
  stacked: z.object({
    labelGuide: z.number().int().min(0),
    iconBox: z.number().int().min(0),
    gap: z.number().int().min(0),
    guides: z.number().int().min(0),
    change: z.number().int().min(0),
    slide: z.number().int().min(1),
  }),
  kbd: z.object({
    iconBox: z.number().int().min(0),
    emptyNote: z.number().int().min(0),
    inkGuides: z.number().int().min(0),
    change: z.number().int().min(0),
    slide: z.number().int().min(1),
    marksOut: z.number().int().min(0),
  }),
})

export type Timing = z.infer<typeof timingSchema>

export const promoSchema = z.object({
  shape: z.enum(["square", "wide", "tall"]),
  timing: timingSchema,
})

export type PromoProps = z.infer<typeof promoSchema>
