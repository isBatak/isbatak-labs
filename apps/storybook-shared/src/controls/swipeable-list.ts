export interface SwipeableListControls {
  disabled: boolean
  dir: "ltr" | "rtl"
  fullSwipe: boolean
  threshold: number
  fullSwipeThreshold: number
  snapBounce: number
  resistance: number
}

/** `fullSwipe` is on for the stories; the machine defaults it to `false` (see `swipeable-list.machine.ts`). */
export const swipeableListArgs: SwipeableListControls = {
  disabled: false,
  dir: "ltr",
  fullSwipe: true,
  threshold: 0.5,
  fullSwipeThreshold: 0.5,
  snapBounce: 0.14,
  resistance: 0.55,
}

export const swipeableListArgTypes = {
  disabled: { control: "boolean" },
  dir: { control: "inline-radio", options: ["ltr", "rtl"] },
  fullSwipe: { control: "boolean" },
  threshold: { control: { type: "range", min: 0.1, max: 0.9, step: 0.05 } },
  fullSwipeThreshold: { control: { type: "range", min: 0.2, max: 0.9, step: 0.05 } },
  snapBounce: { control: { type: "range", min: 0, max: 0.6, step: 0.02 } },
  resistance: { control: { type: "range", min: 0.05, max: 1, step: 0.05 } },
  onOpenItemChange: { table: { disable: true } },
  onFullSwipe: { table: { disable: true } },
} as const
