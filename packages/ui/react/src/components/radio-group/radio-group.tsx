"use client"

import { RadioGroup, useRadioGroupItemContext } from "@ark-ui/react/radio-group"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { radioGroup } from "@isbatak/panda-ds/recipes"

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

function RadioGroupDot() {
  const item = useRadioGroupItemContext()
  return item.checked ? <span className="dot" /> : null
}

export const RadioGroupItemControl = withContext(RadioGroup.ItemControl, "itemControl", {
  defaultProps: { children: <RadioGroupDot /> },
})
export type RadioGroupItemControlProps = ComponentProps<typeof RadioGroupItemControl>

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
