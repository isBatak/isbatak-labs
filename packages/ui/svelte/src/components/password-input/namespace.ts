export { default as Root, type PasswordInputRootProps as RootProps } from "./password-input-root.svelte"
export {
  default as RootProvider,
  type PasswordInputRootProviderProps as RootProviderProps,
} from "./password-input-root-provider.svelte"
export { default as Label, type PasswordInputLabelProps as LabelProps } from "./password-input-label.svelte"
export { default as Control, type PasswordInputControlProps as ControlProps } from "./password-input-control.svelte"
export { default as Input, type PasswordInputInputProps as InputProps } from "./password-input-input.svelte"
export {
  default as VisibilityTrigger,
  type PasswordInputVisibilityTriggerProps as VisibilityTriggerProps,
} from "./password-input-visibility-trigger.svelte"
export {
  default as Indicator,
  type PasswordInputIndicatorProps as IndicatorProps,
} from "./password-input-indicator.svelte"

import { PasswordInput } from "@ark-ui/svelte/password-input"

export const Context = PasswordInput.Context
