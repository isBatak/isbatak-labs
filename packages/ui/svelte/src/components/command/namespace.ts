export { default as Root, type CommandRootProps as RootProps } from "./command-root.svelte"
export {
  default as RootProvider,
  type CommandRootProviderProps as RootProviderProps,
} from "./command-root-provider.svelte"
export { default as Provider, type CommandProviderProps as ProviderProps } from "./command-provider.svelte"
export { default as Dialog, type CommandDialogProps as DialogProps } from "./command-dialog.svelte"
export { default as DialogTrigger, type DialogTriggerProps } from "../dialog/dialog-trigger.svelte"
export { default as DialogBackdrop, type DialogBackdropProps } from "../dialog/dialog-backdrop.svelte"
export {
  default as DialogContent,
  type CommandDialogContentProps as DialogContentProps,
} from "./command-dialog-content.svelte"
export { default as Label, type CommandLabelProps as LabelProps } from "./command-label.svelte"
export { default as Control, type CommandControlProps as ControlProps } from "./command-control.svelte"
export { default as Indicator, type CommandIndicatorProps as IndicatorProps } from "./command-indicator.svelte"
export { default as Input, type CommandInputProps as InputProps } from "./command-input.svelte"
export {
  default as ClearTrigger,
  type CommandClearTriggerProps as ClearTriggerProps,
} from "./command-clear-trigger.svelte"
export { default as List, type CommandListProps as ListProps } from "./command-list.svelte"
export { default as ItemGroup, type CommandItemGroupProps as ItemGroupProps } from "./command-item-group.svelte"
export {
  default as ItemGroupLabel,
  type CommandItemGroupLabelProps as ItemGroupLabelProps,
} from "./command-item-group-label.svelte"
export { default as Item, type CommandItemProps as ItemProps } from "./command-item.svelte"
export { default as ItemText, type CommandItemTextProps as ItemTextProps } from "./command-item-text.svelte"
export { default as ItemCommand, type CommandItemCommandProps as ItemCommandProps } from "./command-item-command.svelte"
export { default as Loading, type CommandLoadingProps as LoadingProps } from "./command-loading.svelte"
export { default as Empty, type CommandEmptyProps as EmptyProps } from "./command-empty.svelte"
export { default as Separator, type CommandSeparatorProps as SeparatorProps } from "./command-separator.svelte"
export { default as Footer, type CommandFooterProps as FooterProps } from "./command-footer.svelte"
export type {
  CommandItem as ItemData,
  CommandModifierKeys as ModifierKeys,
  CommandSelectionDetails as SelectionDetails,
} from "./command-store"

import { Combobox } from "@ark-ui/svelte/combobox"
import { Dialog } from "@ark-ui/svelte/dialog"

export const Context = Combobox.Context
export const DialogContext = Dialog.Context
export const ItemContext = Combobox.ItemContext
