import type { HTMLArkProps } from "@ark-ui/vue/factory"
import { NumberInput } from "@ark-ui/vue/number-input"
import type { ComponentProps } from "vue-component-type-helpers"
import type { FunctionalComponent } from "vue"
import { numberInput } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(numberInput)

export const NumberInputRoot = withProvider(NumberInput.Root, "root")
export type NumberInputRootProps = ComponentProps<typeof NumberInputRoot>

export const NumberInputRootProvider = withProvider(NumberInput.RootProvider, "root")
export type NumberInputRootProviderProps = ComponentProps<typeof NumberInputRootProvider>

export const NumberInputLabel = withContext(NumberInput.Label, "label")
export type NumberInputLabelProps = ComponentProps<typeof NumberInputLabel>

export const NumberInputControl = withContext(NumberInput.Control, "control")
export type NumberInputControlProps = ComponentProps<typeof NumberInputControl>

export const NumberInputInput = withContext(
  NumberInput.Input as unknown as FunctionalComponent<HTMLArkProps<"input">>,
  "input",
)
export type NumberInputInputProps = ComponentProps<typeof NumberInputInput>

export const NumberInputValueText = withContext(NumberInput.ValueText, "valueText")
export type NumberInputValueTextProps = ComponentProps<typeof NumberInputValueText>

export const NumberInputIncrementTrigger = withContext(NumberInput.IncrementTrigger, "incrementTrigger")
export type NumberInputIncrementTriggerProps = ComponentProps<typeof NumberInputIncrementTrigger>

export const NumberInputDecrementTrigger = withContext(NumberInput.DecrementTrigger, "decrementTrigger")
export type NumberInputDecrementTriggerProps = ComponentProps<typeof NumberInputDecrementTrigger>

export const NumberInputScrubber = withContext(NumberInput.Scrubber, "scrubber")
export type NumberInputScrubberProps = ComponentProps<typeof NumberInputScrubber>

export const NumberInputContext = NumberInput.Context
export type NumberInputContextProps = ComponentProps<typeof NumberInputContext>
