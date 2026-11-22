import { z } from "zod"

export const VIDEO = {
  fps: 60,
  duration: 960,
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
  square: { grid: 13, zoom: 1.4, magnify: 3.6, compare: 2, top: 0.4, compareTop: 0.5, toggleTop: 0.8, toggleZoom: 1.5 },
  wide: { grid: 11, zoom: 1.3, magnify: 4.6, compare: 2, top: 0.4, compareTop: 0.52, toggleTop: 0.84, toggleZoom: 1.4 },
  tall: { grid: 20, zoom: 1.2, magnify: 2.5, compare: 2, top: 0.42, compareTop: 0.5, toggleTop: 0.6, toggleZoom: 1.6 },
} as const

export const md = { border: 1, padding: 16, height: 40, icon: 20, iconTop: 10, offset: 4 }
export const plusInk = (md.icon * 5.25) / 24

export const px = (value: number) => `${Number(value.toFixed(1))}px`

export const timingSchema = z.object({
  measure: z.object({
    boxGuides: z.number().int().min(0),
    iconBox: z.number().int().min(0),
    emptyNote: z.number().int().min(0),
    inkGuides: z.number().int().min(0),
    reach: z.number().int().min(0),
    click: z.number().int().min(0),
    slide: z.number().int().min(1),
    release: z.number().int().min(0),
    guidesOut: z.number().int().min(0),
  }),
  compare: z.object({
    equal: z.number().int().min(0),
    optical: z.number().int().min(0),
  }),
})

export type Timing = z.infer<typeof timingSchema>

export const promoSchema = z.object({
  shape: z.enum(["square", "wide", "tall"]),
  timing: timingSchema,
})

export type PromoProps = z.infer<typeof promoSchema>
