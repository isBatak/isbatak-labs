export { default as Root, type NumberInputRootProps as RootProps } from "./number-input-root.svelte"
export {
  default as RootProvider,
  type NumberInputRootProviderProps as RootProviderProps,
} from "./number-input-root-provider.svelte"
export { default as Label, type NumberInputLabelProps as LabelProps } from "./number-input-label.svelte"
export { default as Control, type NumberInputControlProps as ControlProps } from "./number-input-control.svelte"
export { default as Input, type NumberInputInputProps as InputProps } from "./number-input-input.svelte"
export {
  default as ValueText,
  type NumberInputValueTextProps as ValueTextProps,
} from "./number-input-value-text.svelte"
export {
  default as IncrementTrigger,
  type NumberInputIncrementTriggerProps as IncrementTriggerProps,
} from "./number-input-increment-trigger.svelte"
export {
  default as DecrementTrigger,
  type NumberInputDecrementTriggerProps as DecrementTriggerProps,
} from "./number-input-decrement-trigger.svelte"
export { default as Scrubber, type NumberInputScrubberProps as ScrubberProps } from "./number-input-scrubber.svelte"

import { NumberInput } from "@ark-ui/svelte/number-input"

export const Context = NumberInput.Context
