import { RadioGroup, useRadioGroupItemContext } from "@ark-ui/solid/radio-group"
import { type ComponentProps, Show, splitProps } from "solid-js"
import { radioGroup } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"

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
  return (
    <Show when={item().checked}>
      <span class="dot" />
    </Show>
  )
}

const StyledItemControl = withContext(RadioGroup.ItemControl, "itemControl")

export type RadioGroupItemControlProps = ComponentProps<typeof StyledItemControl>
export function RadioGroupItemControl(props: RadioGroupItemControlProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledItemControl {...rest}>{local.children ?? <RadioGroupDot />}</StyledItemControl>
}

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
