export { default as Root, type NumberStepperInputRootProps as RootProps } from "./number-stepper-input-root.svelte"
export {
  default as RootProvider,
  type NumberStepperInputRootProviderProps as RootProviderProps,
} from "./number-stepper-input-root-provider.svelte"
export { default as Label, type NumberStepperInputLabelProps as LabelProps } from "./number-stepper-input-label.svelte"
export {
  default as Control,
  type NumberStepperInputControlProps as ControlProps,
} from "./number-stepper-input-control.svelte"
export { default as Input, type NumberStepperInputInputProps as InputProps } from "./number-stepper-input-input.svelte"
export {
  default as ValueText,
  type NumberStepperInputValueTextProps as ValueTextProps,
} from "./number-stepper-input-value-text.svelte"
export {
  default as DecrementTrigger,
  type NumberStepperInputDecrementTriggerProps as DecrementTriggerProps,
} from "./number-stepper-input-decrement-trigger.svelte"
export {
  default as IncrementTrigger,
  type NumberStepperInputIncrementTriggerProps as IncrementTriggerProps,
} from "./number-stepper-input-increment-trigger.svelte"
export {
  default as TriggerGroup,
  type NumberStepperInputTriggerGroupProps as TriggerGroupProps,
} from "./number-stepper-input-trigger-group.svelte"
export {
  default as InlineLabel,
  type NumberStepperInputInlineLabelProps as InlineLabelProps,
} from "./number-stepper-input-inline-label.svelte"

import { NumberInput } from "@ark-ui/svelte/number-input"

export const Context = NumberInput.Context
