export const componentIds = ["wheel-picker", "masonry"] as const

export type ComponentId = (typeof componentIds)[number]

export interface ComponentMeta {
  name: string
  summary: string
  preset: string
  pandaPackage: string
  frame: "sm" | "lg"
  usage: { zag: string; ark: string }
  check: string
}

export const componentMeta: Record<ComponentId, ComponentMeta> = {
  "wheel-picker": {
    name: "wheel picker",
    summary:
      "It's a scrollable wheel for picking one value from a list, with inertia scrolling, snapping and optional looping.",
    preset: "wheelPickerPreset",
    pandaPackage: "@isbatak/panda-wheel-picker",
    frame: "sm",
    usage: {
      zag: "Ask me where the picker should go and what it should list, and suggest a spot if one stands out. Then render it there: copy the installed component, give it a name that fits, replace the items and the label with mine, and keep the value options that fit (a default value, or a controlled value with a change handler).",
      ark: "Ask me where the picker should go and what it should list, and suggest a spot if one stands out. Then render it there: copy the installed component, give it a name that fits, replace the items and the label with mine, and keep the value props that fit (a default value, or a controlled value with a change handler).",
    },
    check: "check that the picker renders, scrolls and snaps to a value",
  },
  masonry: {
    name: "masonry layout",
    summary: "It lays out items of different heights in columns, placing each one in the shortest column or in order.",
    preset: "masonryPreset",
    pandaPackage: "@isbatak/panda-masonry",
    frame: "lg",
    usage: {
      zag: "Ask me where the masonry should go and what it should show, and suggest a spot if one stands out. Then render it there: copy the installed component, give it a name that fits, replace the items with mine (each item needs a unique `value` and must be a direct child of the root), and keep the layout options that fit (`columns`, `gap`, `sequential`).",
      ark: "Ask me where the masonry should go and what it should show, and suggest a spot if one stands out. Then render it there: copy the installed component, give it a name that fits, replace the items with mine (each `Masonry.Item` needs a unique `value` and must be a direct child of `Masonry.Root`), and keep the layout props that fit (`columns`, `gap`, `sequential`).",
    },
    check: "check that the items render in columns without gaps and re-flow when the window is resized",
  },
}

export const componentOf = (exampleId: string): ComponentId =>
  componentIds.find((id) => exampleId.startsWith(`${id}-`)) ?? "wheel-picker"
