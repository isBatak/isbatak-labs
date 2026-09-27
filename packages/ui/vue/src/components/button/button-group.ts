import { type ButtonVariantProps, button } from "@isbatak/panda-ds/recipes"
import { type FunctionalComponent, h } from "vue"

import { Group, type GroupProps } from "../group"
import { ButtonPropsProvider } from "./button"

export type ButtonGroupProps = GroupProps & ButtonVariantProps

export const ButtonGroup: FunctionalComponent<ButtonGroupProps> = (props, { slots }) => {
  const [variantProps, groupProps] = button.splitVariantProps(props)
  return h(ButtonPropsProvider, { value: variantProps }, () => h(Group, groupProps, slots))
}
