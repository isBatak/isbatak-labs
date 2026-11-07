import type { HTMLArkProps } from "@ark-ui/vue/factory"
import { Listbox } from "@ark-ui/vue/listbox"
import type { FunctionalComponent } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { listbox } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(listbox)

export const ListboxRoot = withProvider(Listbox.Root, "root")
export type ListboxRootProps = ComponentProps<typeof ListboxRoot>

export const ListboxRootProvider = withProvider(Listbox.RootProvider, "root")
export type ListboxRootProviderProps = ComponentProps<typeof ListboxRootProvider>

export const ListboxLabel = withContext(Listbox.Label, "label")
export type ListboxLabelProps = ComponentProps<typeof ListboxLabel>

export const ListboxInput = withContext(Listbox.Input as unknown as FunctionalComponent<HTMLArkProps<"input">>, "input")
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
