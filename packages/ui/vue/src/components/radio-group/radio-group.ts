import { RadioGroup, useRadioGroupItemContext } from "@ark-ui/vue/radio-group"
import { radioGroup } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext } = createSlotRecipeContext(radioGroup)

export const RadioGroupRoot = withProvider(RadioGroup.Root, "root")
export type RadioGroupRootProps = ComponentProps<typeof RadioGroupRoot>

export const RadioGroupRootProvider = withProvider(RadioGroup.RootProvider, "root")
export type RadioGroupRootProviderProps = ComponentProps<typeof RadioGroupRootProvider>

export const RadioGroupLabel = withContext(RadioGroup.Label, "label")
export type RadioGroupLabelProps = ComponentProps<typeof RadioGroupLabel>

export const RadioGroupItem = withContext(RadioGroup.Item, "item")
export type RadioGroupItemProps = ComponentProps<typeof RadioGroupItem>

export const RadioGroupItemText = withContext(RadioGroup.ItemText, "itemText")
export type RadioGroupItemTextProps = ComponentProps<typeof RadioGroupItemText>

const RadioGroupDot = defineComponent({
  name: "RadioGroupDot",
  setup() {
    const item = useRadioGroupItemContext()
    return () => (item.value.checked ? h("span", { class: "dot" }) : null)
  },
})

const StyledItemControl = withContext(RadioGroup.ItemControl, "itemControl")

export type RadioGroupItemControlProps = ComponentProps<typeof StyledItemControl>
export const RadioGroupItemControl: FunctionalComponent<RadioGroupItemControlProps> = (props, { slots }) =>
  h(StyledItemControl, props, () => slots.default?.() ?? h(RadioGroupDot))

export const RadioGroupItemIndicator = RadioGroupItemControl
export type RadioGroupItemIndicatorProps = RadioGroupItemControlProps

export const RadioGroupIndicator = withContext(RadioGroup.Indicator, "indicator")
export type RadioGroupIndicatorProps = ComponentProps<typeof RadioGroupIndicator>

export const RadioGroupItemHiddenInput = RadioGroup.ItemHiddenInput
export type RadioGroupItemHiddenInputProps = RadioGroup.ItemHiddenInputProps

export const RadioGroupContext = RadioGroup.Context
export type RadioGroupContextProps = ComponentProps<typeof RadioGroup.Context>

export const RadioGroupItemContext = RadioGroup.ItemContext
export type RadioGroupItemContextProps = ComponentProps<typeof RadioGroup.ItemContext>
