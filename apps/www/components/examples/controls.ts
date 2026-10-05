import type { ComponentId } from "../docs/component-meta"

export interface ControlValues {
  infinite: boolean
  disabled: boolean
  readOnly: boolean
  invalid: boolean
  visibleCount: number
  dragSensitivity: number
  scrollSensitivity: number
  variant: "subtle" | "outline" | "solid"
  size: "sm" | "md" | "lg"
  columns: number
  sequential: boolean
  gap: "none" | "sm" | "md" | "lg"
}

export type ControlName = keyof ControlValues

export interface ExampleSettings extends Partial<ControlValues> {
  defaultValue?: string
  controlled?: boolean
}

export const controlDefaults: ControlValues = {
  infinite: false,
  disabled: false,
  readOnly: false,
  invalid: false,
  visibleCount: 20,
  dragSensitivity: 5,
  scrollSensitivity: 5,
  variant: "subtle",
  size: "md",
  columns: 4,
  sequential: false,
  gap: "md",
}

interface ComponentControls {
  machine: ControlName[]
  recipe: ControlName[]
}

export const componentControls: Record<ComponentId, ComponentControls> = {
  "wheel-picker": {
    machine: ["infinite", "disabled", "readOnly", "invalid", "visibleCount", "dragSensitivity", "scrollSensitivity"],
    recipe: ["variant", "size"],
  },
  masonry: {
    machine: ["columns", "sequential"],
    recipe: ["gap"],
  },
}
