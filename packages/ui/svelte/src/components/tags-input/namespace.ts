export { default as Root, type TagsInputRootProps as RootProps } from "./tags-input-root.svelte"
export {
  default as RootProvider,
  type TagsInputRootProviderProps as RootProviderProps,
} from "./tags-input-root-provider.svelte"
export { default as Label, type TagsInputLabelProps as LabelProps } from "./tags-input-label.svelte"
export { default as Control, type TagsInputControlProps as ControlProps } from "./tags-input-control.svelte"
export { default as Input, type TagsInputInputProps as InputProps } from "./tags-input-input.svelte"
export {
  default as ClearTrigger,
  type TagsInputClearTriggerProps as ClearTriggerProps,
} from "./tags-input-clear-trigger.svelte"
export { default as Item, type TagsInputItemProps as ItemProps } from "./tags-input-item.svelte"
export {
  default as ItemPreview,
  type TagsInputItemPreviewProps as ItemPreviewProps,
} from "./tags-input-item-preview.svelte"
export { default as ItemText, type TagsInputItemTextProps as ItemTextProps } from "./tags-input-item-text.svelte"
export { default as ItemInput, type TagsInputItemInputProps as ItemInputProps } from "./tags-input-item-input.svelte"
export {
  default as ItemDeleteTrigger,
  type TagsInputItemDeleteTriggerProps as ItemDeleteTriggerProps,
} from "./tags-input-item-delete-trigger.svelte"

import { TagsInput } from "@ark-ui/svelte/tags-input"

export const HiddenInput = TagsInput.HiddenInput
export const Context = TagsInput.Context
export const ItemContext = TagsInput.ItemContext
