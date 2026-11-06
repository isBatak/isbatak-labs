import { ark } from "@ark-ui/solid/factory"
import { NumberInput } from "@ark-ui/solid/number-input"
import type { ComponentProps } from "solid-js"
import { numberStepperInput } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(numberStepperInput)

export const NumberStepperInputRoot = withProvider(NumberInput.Root, "root")
export type NumberStepperInputRootProps = ComponentProps<typeof NumberStepperInputRoot>

export const NumberStepperInputRootProvider = withProvider(NumberInput.RootProvider, "root")
export type NumberStepperInputRootProviderProps = ComponentProps<typeof NumberStepperInputRootProvider>

export const NumberStepperInputLabel = withContext(NumberInput.Label, "label")
export type NumberStepperInputLabelProps = ComponentProps<typeof NumberStepperInputLabel>

export const NumberStepperInputControl = withContext(NumberInput.Control, "control")
export type NumberStepperInputControlProps = ComponentProps<typeof NumberStepperInputControl>

export const NumberStepperInputInput = withContext(NumberInput.Input, "input")
export type NumberStepperInputInputProps = ComponentProps<typeof NumberStepperInputInput>

export const NumberStepperInputValueText = withContext(NumberInput.ValueText, "valueText")
export type NumberStepperInputValueTextProps = ComponentProps<typeof NumberStepperInputValueText>

export const NumberStepperInputDecrementTrigger = withContext(NumberInput.DecrementTrigger, "decrementTrigger")
export type NumberStepperInputDecrementTriggerProps = ComponentProps<typeof NumberStepperInputDecrementTrigger>

export const NumberStepperInputIncrementTrigger = withContext(NumberInput.IncrementTrigger, "incrementTrigger")
export type NumberStepperInputIncrementTriggerProps = ComponentProps<typeof NumberStepperInputIncrementTrigger>

export const NumberStepperInputTriggerGroup = withContext(ark.div, "triggerGroup")
export type NumberStepperInputTriggerGroupProps = ComponentProps<typeof NumberStepperInputTriggerGroup>

export const NumberStepperInputInlineLabel = withContext(ark.span, "inlineLabel", {
  defaultProps: { "data-inline-label": "" },
})
export type NumberStepperInputInlineLabelProps = ComponentProps<typeof NumberStepperInputInlineLabel>

export const NumberStepperInputContext = NumberInput.Context
export type NumberStepperInputContextProps = ComponentProps<typeof NumberStepperInputContext>
