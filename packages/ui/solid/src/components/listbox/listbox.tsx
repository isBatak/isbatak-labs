import type { CollectionItem } from "@ark-ui/solid/collection"
import { Listbox } from "@ark-ui/solid/listbox"
import type { ComponentProps, JSX } from "solid-js"
import { listbox } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(listbox)

const StyledListboxRoot = withProvider(Listbox.Root, "root")

export type ListboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComponentProps<typeof StyledListboxRoot>,
  keyof Listbox.RootProps<T>
> &
  Listbox.RootProps<T>

export const ListboxRoot = StyledListboxRoot as <T extends CollectionItem>(props: ListboxRootProps<T>) => JSX.Element

const StyledListboxRootProvider = withProvider(Listbox.RootProvider, "root")

export type ListboxRootProviderProps<T extends CollectionItem = CollectionItem> = Omit<
  ComponentProps<typeof StyledListboxRootProvider>,
  keyof Listbox.RootProviderProps<T>
> &
  Listbox.RootProviderProps<T>

export const ListboxRootProvider = StyledListboxRootProvider as <T extends CollectionItem>(
  props: ListboxRootProviderProps<T>,
) => JSX.Element

export const ListboxLabel = withContext(Listbox.Label, "label")
export type ListboxLabelProps = ComponentProps<typeof ListboxLabel>

export const ListboxInput = withContext(Listbox.Input, "input")
export type ListboxInputProps = ComponentProps<typeof ListboxInput>

export const ListboxContent = withContext(Listbox.Content, "content")
export type ListboxContentProps = ComponentProps<typeof ListboxContent>

export const ListboxItemGroup = withContext(Listbox.ItemGroup, "itemGroup")
export type ListboxItemGroupProps = ComponentProps<typeof ListboxItemGroup>

export const ListboxItemGroupLabel = withContext(Listbox.ItemGroupLabel, "itemGroupLabel")
export type ListboxItemGroupLabelProps = ComponentProps<typeof ListboxItemGroupLabel>

export const ListboxItem = withContext(Listbox.Item, "item")
export type ListboxItemProps = ComponentProps<typeof ListboxItem>

export const ListboxItemText = withContext(Listbox.ItemText, "itemText")
export type ListboxItemTextProps = ComponentProps<typeof ListboxItemText>

export const ListboxItemIndicator = withContext(Listbox.ItemIndicator, "itemIndicator")
export type ListboxItemIndicatorProps = ComponentProps<typeof ListboxItemIndicator>

export const ListboxValueText = withContext(Listbox.ValueText, "valueText")
export type ListboxValueTextProps = ComponentProps<typeof ListboxValueText>

export const ListboxEmpty = withContext(Listbox.Empty, "empty")
export type ListboxEmptyProps = ComponentProps<typeof ListboxEmpty>

export const ListboxContext = Listbox.Context
export type ListboxContextProps = ComponentProps<typeof ListboxContext>

export const ListboxItemContext = Listbox.ItemContext
export type ListboxItemContextProps = ComponentProps<typeof ListboxItemContext>
