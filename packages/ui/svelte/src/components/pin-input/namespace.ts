export { default as Root, type PinInputRootProps as RootProps } from "./pin-input-root.svelte"
export {
  default as RootProvider,
  type PinInputRootProviderProps as RootProviderProps,
} from "./pin-input-root-provider.svelte"
export { default as Label, type PinInputLabelProps as LabelProps } from "./pin-input-label.svelte"
export { default as Control, type PinInputControlProps as ControlProps } from "./pin-input-control.svelte"
export { default as Input, type PinInputInputProps as InputProps } from "./pin-input-input.svelte"

import { PinInput } from "@ark-ui/svelte/pin-input"

export const HiddenInput = PinInput.HiddenInput
export const Context = PinInput.Context
