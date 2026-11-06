import type { HTMLArkProps } from "@ark-ui/vue/factory"
import { PinInput } from "@ark-ui/vue/pin-input"
import type { ComponentProps } from "vue-component-type-helpers"
import type { FunctionalComponent } from "vue"
import { pinInput } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(pinInput)

export const PinInputRoot = withProvider(PinInput.Root, "root", { forwardProps: ["mask"] })
export type PinInputRootProps = ComponentProps<typeof PinInputRoot>

export const PinInputRootProvider = withProvider(PinInput.RootProvider, "root", { forwardProps: ["mask"] })
export type PinInputRootProviderProps = ComponentProps<typeof PinInputRootProvider>

export const PinInputLabel = withContext(PinInput.Label, "label")
export type PinInputLabelProps = ComponentProps<typeof PinInputLabel>

export const PinInputControl = withContext(PinInput.Control, "control")
export type PinInputControlProps = ComponentProps<typeof PinInputControl>

export const PinInputInput = withContext(
  PinInput.Input as unknown as FunctionalComponent<HTMLArkProps<"input">>,
  "input",
)
export type PinInputInputProps = ComponentProps<typeof PinInputInput>

export const PinInputHiddenInput = PinInput.HiddenInput
export type PinInputHiddenInputProps = ComponentProps<typeof PinInputHiddenInput>

export const PinInputContext = PinInput.Context
export type PinInputContextProps = ComponentProps<typeof PinInputContext>
