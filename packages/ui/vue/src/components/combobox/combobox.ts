import { Combobox } from "@ark-ui/vue/combobox"
import { ark, type HTMLArkProps } from "@ark-ui/vue/factory"
import { type Component, defineComponent, type FunctionalComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { combobox } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(combobox)

export const ComboboxRoot = withProvider(Combobox.Root, "root")
export type ComboboxRootProps = ComponentProps<typeof ComboboxRoot>

export const ComboboxRootProvider = withProvider(Combobox.RootProvider, "root")
export type ComboboxRootProviderProps = ComponentProps<typeof ComboboxRootProvider>

export const ComboboxLabel = withContext(Combobox.Label, "label")
export type ComboboxLabelProps = ComponentProps<typeof ComboboxLabel>

export const ComboboxControl = withContext(Combobox.Control, "control")
export type ComboboxControlProps = ComponentProps<typeof ComboboxControl>

export const ComboboxInput = withContext(
  Combobox.Input as unknown as FunctionalComponent<HTMLArkProps<"input">>,
  "input",
)
export type ComboboxInputProps = ComponentProps<typeof ComboboxInput>

export const ComboboxIndicatorGroup = withContext(ark.div, "indicatorGroup")
export type ComboboxIndicatorGroupProps = ComponentProps<typeof ComboboxIndicatorGroup>

const StyledComboboxTrigger = withContext(Combobox.Trigger, "trigger")
export type ComboboxTriggerProps = ComponentProps<typeof StyledComboboxTrigger>

export const ComboboxTrigger = defineComponent({
  name: "ComboboxTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledComboboxTrigger as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-down" }))
  },
}) as unknown as typeof StyledComboboxTrigger

const StyledComboboxClearTrigger = withContext(Combobox.ClearTrigger, "clearTrigger")
export type ComboboxClearTriggerProps = ComponentProps<typeof StyledComboboxClearTrigger>

export const ComboboxClearTrigger = defineComponent({
  name: "ComboboxClearTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledComboboxClearTrigger as Component,
        { "aria-label": "Clear value", ...attrs },
        () => slots.default?.() ?? h(Icon, { name: "close" }),
      )
  },
}) as unknown as typeof StyledComboboxClearTrigger

export const ComboboxPositioner = withContext(Combobox.Positioner, "positioner")
export type ComboboxPositionerProps = ComponentProps<typeof ComboboxPositioner>

export const ComboboxContent = withContext(Combobox.Content, "content")
export type ComboboxContentProps = ComponentProps<typeof ComboboxContent>

export const ComboboxList = withContext(Combobox.List, "list")
export type ComboboxListProps = ComponentProps<typeof ComboboxList>

export const ComboboxItemGroup = withContext(Combobox.ItemGroup, "itemGroup")
export type ComboboxItemGroupProps = ComponentProps<typeof ComboboxItemGroup>

export const ComboboxItemGroupLabel = withContext(Combobox.ItemGroupLabel, "itemGroupLabel")
export type ComboboxItemGroupLabelProps = ComponentProps<typeof ComboboxItemGroupLabel>

export const ComboboxItem = withContext(Combobox.Item, "item")
export type ComboboxItemProps = ComponentProps<typeof ComboboxItem>

export const ComboboxItemText = withContext(Combobox.ItemText, "itemText")
export type ComboboxItemTextProps = ComponentProps<typeof ComboboxItemText>

export const ComboboxItemContent = withContext(ark.div, "itemContent")
export type ComboboxItemContentProps = ComponentProps<typeof ComboboxItemContent>

export const ComboboxItemDescription = withContext(ark.div, "itemDescription")
export type ComboboxItemDescriptionProps = ComponentProps<typeof ComboboxItemDescription>

const StyledComboboxItemIndicator = withContext(Combobox.ItemIndicator, "itemIndicator")
export type ComboboxItemIndicatorProps = ComponentProps<typeof StyledComboboxItemIndicator>

export const ComboboxItemIndicator = defineComponent({
  name: "ComboboxItemIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledComboboxItemIndicator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "check" }))
  },
}) as unknown as typeof StyledComboboxItemIndicator

export const ComboboxEmpty = withContext(Combobox.Empty, "empty")
export type ComboboxEmptyProps = ComponentProps<typeof ComboboxEmpty>

export const ComboboxContext = Combobox.Context
export type ComboboxContextProps = ComponentProps<typeof ComboboxContext>

export const ComboboxItemContext = Combobox.ItemContext
export type ComboboxItemContextProps = ComponentProps<typeof ComboboxItemContext>
