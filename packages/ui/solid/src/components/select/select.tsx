import type { CollectionItem } from "@ark-ui/solid/collection"
import { Select } from "@ark-ui/solid/select"
import type { ComponentProps, JSX } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/ui-solid/jsx"
import { select } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(select)

const StyledSelectRoot = withProvider(Select.Root, "root")

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComponentProps<typeof StyledSelectRoot>,
  keyof Select.RootProps<T>
> &
  Select.RootProps<T>

export const SelectRoot = StyledSelectRoot as <T extends CollectionItem>(props: SelectRootProps<T>) => JSX.Element

export const SelectTrigger = Select.Trigger
export type SelectTriggerProps = ComponentProps<typeof SelectTrigger>

export const SelectPositioner = withContext(Select.Positioner, "positioner")
export type SelectPositionerProps = ComponentProps<typeof SelectPositioner>

export const SelectContent = withContext(Select.Content, "content")
export type SelectContentProps = ComponentProps<typeof SelectContent>

export const SelectItem = withContext(Select.Item, "item")
export type SelectItemProps = ComponentProps<typeof SelectItem>

export const SelectItemText = withContext(Select.ItemText, "itemText")
export type SelectItemTextProps = ComponentProps<typeof SelectItemText>

export const SelectItemIndicator = withContext(Select.ItemIndicator, "itemIndicator")
export type SelectItemIndicatorProps = ComponentProps<typeof SelectItemIndicator>

export const SelectContext = Select.Context
export type SelectContextProps<T extends CollectionItem = CollectionItem> = Select.ContextProps<T>

export const SelectItemContext = Select.ItemContext
export type SelectItemContextProps = Select.ItemContextProps
