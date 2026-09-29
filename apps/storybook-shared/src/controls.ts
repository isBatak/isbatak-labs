export interface WheelPickerControls {
  disabled: boolean
  readOnly: boolean
  invalid: boolean
  infinite: boolean
  dir: "ltr" | "rtl"
  visibleCount: number
  optionItemHeight: number
  dragSensitivity: number
  scrollSensitivity: number
}

/** Defaults mirror the machine's own defaults (see `wheel-picker.machine.ts`). */
export const wheelPickerArgs: WheelPickerControls = {
  disabled: false,
  readOnly: false,
  invalid: false,
  infinite: false,
  dir: "ltr",
  visibleCount: 20,
  optionItemHeight: 30,
  dragSensitivity: 5,
  scrollSensitivity: 5,
}

export const wheelPickerArgTypes = {
  disabled: { control: "boolean" },
  readOnly: { control: "boolean" },
  invalid: { control: "boolean" },
  infinite: { control: "boolean" },
  dir: { control: "inline-radio", options: ["ltr", "rtl"] },
  visibleCount: { control: { type: "number", min: 4 } },
  optionItemHeight: { control: { type: "number", min: 1 } },
  dragSensitivity: { control: { type: "number", min: 1 } },
  scrollSensitivity: { control: { type: "number", min: 1 } },
  onValueChange: { table: { disable: true } },
} as const

export const locales = ["en-US", "en-GB", "fr-FR", "de-DE", "cs-CZ", "ja-JP", "mk-MK", "zh-CN"] as const

export type Locale = (typeof locales)[number]

export interface TimeInputControls {
  locale: Locale
}

export const timeInputArgs: TimeInputControls = { locale: "en-US" }

export const timeInputArgTypes = {
  locale: { control: "select", options: locales },
} as const

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
