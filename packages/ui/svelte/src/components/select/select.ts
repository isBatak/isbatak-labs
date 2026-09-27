import { type CollectionItem, Select } from "@ark-ui/svelte/select"

export { default as SelectRoot, type SelectRootProps } from "./select-root.svelte"
export const SelectTrigger = Select.Trigger
export type SelectTriggerProps = Select.TriggerProps
export { default as SelectPositioner, type SelectPositionerProps } from "./select-positioner.svelte"
export { default as SelectContent, type SelectContentProps } from "./select-content.svelte"
export { default as SelectItem, type SelectItemProps } from "./select-item.svelte"
export { default as SelectItemText, type SelectItemTextProps } from "./select-item-text.svelte"
export { default as SelectItemIndicator, type SelectItemIndicatorProps } from "./select-item-indicator.svelte"
export const SelectContext = Select.Context
export const SelectItemContext = Select.ItemContext
export type SelectContextProps<T extends CollectionItem = CollectionItem> = Select.ContextProps<T>
export type SelectItemContextProps = Select.ItemContextProps
