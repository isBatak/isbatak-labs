import type { ComponentId } from "../docs/component-meta"

export interface ControlValues {
  loop: boolean
  disabled: boolean
  visibleCount: number
  itemHeight: number
  variant: "subtle" | "outline" | "solid"
  size: "sm" | "md" | "lg"
  columns: number
  sequential: boolean
  gap: "none" | "sm" | "md" | "lg"
  autoplay: boolean
  interval: number
}

export type ControlName = keyof ControlValues

export interface ExampleSettings extends Partial<ControlValues> {
  defaultValue?: string
  controlled?: boolean
}

export const controlDefaults: ControlValues = {
  loop: false,
  disabled: false,
  visibleCount: 5,
  itemHeight: 36,
  variant: "subtle",
  size: "md",
  columns: 4,
  sequential: false,
  gap: "md",
  autoplay: true,
  interval: 2000,
}

interface ComponentControls {
  machine: ControlName[]
  recipe: ControlName[]
}

export const componentControls: Record<ComponentId, ComponentControls> = {
  "wheel-picker": {
    machine: ["loop", "disabled", "visibleCount", "itemHeight"],
    recipe: ["variant", "size"],
  },
  masonry: {
    machine: ["columns", "sequential"],
    recipe: ["gap"],
  },
  "text-flip": {
    machine: ["autoplay", "interval"],
    recipe: [],
  },
}
