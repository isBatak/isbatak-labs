import { WheelPicker } from "@isbatak/ark-wheel-picker/vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/ui-vue/jsx"
import { wheelPicker } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(wheelPicker)

export const WheelPickerRoot = withProvider(WheelPicker.Root, "root")
export type WheelPickerRootProps = ComponentProps<typeof WheelPickerRoot>

export const WheelPickerLabel = withContext(WheelPicker.Label, "label")
export type WheelPickerLabelProps = ComponentProps<typeof WheelPickerLabel>

export const WheelPickerControl = withContext(WheelPicker.Control, "control")
export type WheelPickerControlProps = ComponentProps<typeof WheelPickerControl>

export const WheelPickerViewport = withContext(WheelPicker.Viewport, "viewport")
export type WheelPickerViewportProps = ComponentProps<typeof WheelPickerViewport>

export const WheelPickerItemGroup = withContext(WheelPicker.ItemGroup, "itemGroup")
export type WheelPickerItemGroupProps = ComponentProps<typeof WheelPickerItemGroup>

export const WheelPickerItem = withContext(WheelPicker.Item, "item")
export type WheelPickerItemProps = ComponentProps<typeof WheelPickerItem>

export const WheelPickerHighlight = withContext(WheelPicker.Highlight, "highlight")
export type WheelPickerHighlightProps = ComponentProps<typeof WheelPickerHighlight>

export const WheelPickerHighlightItemGroup = withContext(WheelPicker.HighlightItemGroup, "highlightItemGroup")
export type WheelPickerHighlightItemGroupProps = ComponentProps<typeof WheelPickerHighlightItemGroup>

export const WheelPickerHighlightItem = withContext(WheelPicker.HighlightItem, "highlightItem")
export type WheelPickerHighlightItemProps = ComponentProps<typeof WheelPickerHighlightItem>

export const WheelPickerHiddenSelect = WheelPicker.HiddenSelect
export const WheelPickerContext = WheelPicker.Context
export type WheelPickerContextProps = ComponentProps<typeof WheelPickerContext>
