import { ark } from "@ark-ui/vue/factory"
import { type CollectionItem, Select } from "@ark-ui/vue/select"
import {
  type Component,
  type FunctionalComponent,
  type InjectionKey,
  type PropType,
  defineComponent,
  h,
  inject,
  provide,
} from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { select } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(select)

const StyledSelectRoot = withProvider(Select.Root, "root")

const alignItemWithTriggerKey: InjectionKey<() => boolean> = Symbol("alignItemWithTrigger")

const untrackedAnchorListeners = {
  ancestorScroll: true,
  ancestorResize: true,
  elementResize: false,
  layoutShift: false,
}

export type SelectRootProps = ComponentProps<typeof StyledSelectRoot> & {
  disableAnchorTracking?: boolean | undefined
}

export const SelectRoot = defineComponent({
  name: "SelectRoot",
  inheritAttrs: false,
  props: {
    alignItemWithTrigger: { type: Boolean, default: false },
    disableAnchorTracking: { type: Boolean, default: false },
    positioning: { type: Object as PropType<Select.RootProps<CollectionItem>["positioning"]>, default: undefined },
  },
  setup(props, { attrs, slots }) {
    provide(alignItemWithTriggerKey, () => props.alignItemWithTrigger)
    return () =>
      h(
        StyledSelectRoot as Component,
        {
          ...attrs,
          alignItemWithTrigger: props.alignItemWithTrigger,
          positioning: {
            sameWidth: true,
            ...props.positioning,
            ...(props.disableAnchorTracking && { listeners: untrackedAnchorListeners }),
          },
        },
        slots,
      )
  },
}) as unknown as typeof StyledSelectRoot & FunctionalComponent<{ disableAnchorTracking?: boolean | undefined }>

export const SelectRootProvider = withProvider(Select.RootProvider, "root")
export type SelectRootProviderProps = ComponentProps<typeof SelectRootProvider>

export const SelectLabel = withContext(Select.Label, "label")
export type SelectLabelProps = ComponentProps<typeof SelectLabel>

export const SelectControl = withContext(Select.Control, "control")
export type SelectControlProps = ComponentProps<typeof SelectControl>

export const SelectTrigger = withContext(Select.Trigger, "trigger")
export type SelectTriggerProps = ComponentProps<typeof SelectTrigger>

export const SelectValueText = withContext(Select.ValueText, "valueText")
export type SelectValueTextProps = ComponentProps<typeof SelectValueText>

export const SelectIndicatorGroup = withContext(ark.div, "indicatorGroup")
export type SelectIndicatorGroupProps = ComponentProps<typeof SelectIndicatorGroup>

const StyledSelectIndicator = withContext(Select.Indicator, "indicator")
export type SelectIndicatorProps = ComponentProps<typeof StyledSelectIndicator>

export const SelectIndicator = defineComponent({
  name: "SelectIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledSelectIndicator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-down" }))
  },
}) as unknown as typeof StyledSelectIndicator

const StyledSelectClearTrigger = withContext(Select.ClearTrigger, "clearTrigger")
export type SelectClearTriggerProps = ComponentProps<typeof StyledSelectClearTrigger>

export const SelectClearTrigger = defineComponent({
  name: "SelectClearTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledSelectClearTrigger as Component,
        { "aria-label": "Clear selection", ...attrs },
        () => slots.default?.() ?? h(Icon, { name: "close" }),
      )
  },
}) as unknown as typeof StyledSelectClearTrigger

export const SelectPositioner = withContext(Select.Positioner, "positioner")
export type SelectPositionerProps = ComponentProps<typeof SelectPositioner>

const StyledSelectContent = withContext(Select.Content, "content")
export type SelectContentProps = ComponentProps<typeof StyledSelectContent>

export const SelectContent = defineComponent({
  name: "SelectContent",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const alignItemWithTrigger = inject(alignItemWithTriggerKey, () => false)
    return () =>
      h(
        StyledSelectContent as Component,
        { "data-align-item-with-trigger": alignItemWithTrigger() ? "" : undefined, ...attrs },
        slots,
      )
  },
}) as unknown as typeof StyledSelectContent

export const SelectList = withContext(Select.List, "list")
export type SelectListProps = ComponentProps<typeof SelectList>

export const SelectItemGroup = withContext(Select.ItemGroup, "itemGroup")
export type SelectItemGroupProps = ComponentProps<typeof SelectItemGroup>

export const SelectItemGroupLabel = withContext(Select.ItemGroupLabel, "itemGroupLabel")
export type SelectItemGroupLabelProps = ComponentProps<typeof SelectItemGroupLabel>

export const SelectItem = withContext(Select.Item, "item")
export type SelectItemProps = ComponentProps<typeof SelectItem>

export const SelectItemText = withContext(Select.ItemText, "itemText")
export type SelectItemTextProps = ComponentProps<typeof SelectItemText>

export const SelectItemContent = withContext(ark.div, "itemContent")
export type SelectItemContentProps = ComponentProps<typeof SelectItemContent>

export const SelectItemDescription = withContext(ark.div, "itemDescription")
export type SelectItemDescriptionProps = ComponentProps<typeof SelectItemDescription>

const StyledSelectItemIndicator = withContext(Select.ItemIndicator, "itemIndicator")
export type SelectItemIndicatorProps = ComponentProps<typeof StyledSelectItemIndicator>

export const SelectItemIndicator = defineComponent({
  name: "SelectItemIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(StyledSelectItemIndicator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "check" }))
  },
}) as unknown as typeof StyledSelectItemIndicator

export const SelectSearch = withContext(ark.input, "search", {
  defaultProps: { type: "search", autocomplete: "off" },
})
export type SelectSearchProps = ComponentProps<typeof SelectSearch>

export const SelectEmpty = withContext(ark.div, "empty", {
  defaultProps: { role: "presentation" },
})
export type SelectEmptyProps = ComponentProps<typeof SelectEmpty>

export const SelectHiddenSelect = Select.HiddenSelect
export type SelectHiddenSelectProps = ComponentProps<typeof SelectHiddenSelect>

export const SelectContext = Select.Context
export type SelectContextProps<T extends CollectionItem = CollectionItem> = Select.ContextProps<T>

export const SelectItemContext = Select.ItemContext
export type SelectItemContextProps = Select.ItemContextProps
