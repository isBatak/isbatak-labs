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
}

export const recipeControlNames: ControlName[] = ["variant", "size"]

export const machineControlNames: ControlName[] = [
  "infinite",
  "disabled",
  "readOnly",
  "invalid",
  "visibleCount",
  "dragSensitivity",
  "scrollSensitivity",
]
