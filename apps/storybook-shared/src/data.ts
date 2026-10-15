import type { ItemData } from "@isbatak/zag-wheel-picker"

export type WheelPickerOption = ItemData

export const frameworkItems: WheelPickerOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { disabled: true, label: "Angular (unavailable)", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
]

export const controlledItems: WheelPickerOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
]

export const createNumberItems = (length: number, add = 0, locale = "en-US"): WheelPickerOption[] => {
  const formatter = new Intl.NumberFormat(locale, { minimumIntegerDigits: 2, useGrouping: false })
  return Array.from({ length }, (_, index) => {
    const value = index + add
    return { label: formatter.format(value), value: value.toString() }
  })
}

export const hourItems = createNumberItems(12, 1)

export const minuteItems = createNumberItems(60)

export const meridiemItems: WheelPickerOption[] = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
]
