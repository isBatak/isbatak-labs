export { default as Root, type EditableRootProps as RootProps } from "./editable-root.svelte"
export {
  default as RootProvider,
  type EditableRootProviderProps as RootProviderProps,
} from "./editable-root-provider.svelte"
export { default as Label, type EditableLabelProps as LabelProps } from "./editable-label.svelte"
export { default as Area, type EditableAreaProps as AreaProps } from "./editable-area.svelte"
export { default as Preview, type EditablePreviewProps as PreviewProps } from "./editable-preview.svelte"
export { default as Input, type EditableInputProps as InputProps } from "./editable-input.svelte"
export { default as Control, type EditableControlProps as ControlProps } from "./editable-control.svelte"
export {
  default as EditTrigger,
  type EditableEditTriggerProps as EditTriggerProps,
} from "./editable-edit-trigger.svelte"
export {
  default as SubmitTrigger,
  type EditableSubmitTriggerProps as SubmitTriggerProps,
} from "./editable-submit-trigger.svelte"
export {
  default as CancelTrigger,
  type EditableCancelTriggerProps as CancelTriggerProps,
} from "./editable-cancel-trigger.svelte"

import { Editable } from "@ark-ui/svelte/editable"

export const Context = Editable.Context
