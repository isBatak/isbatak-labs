import { splitProps } from "@isbatak/panda-ds/helpers"
import { type ButtonVariantProps, button } from "@isbatak/panda-ds/recipes"
import { type FunctionalComponent, h } from "vue"

import { Group, type GroupProps } from "../group"
import { ButtonPropsProvider } from "./button"

const sharedKeys = button.variantKeys.filter((key) => key !== "orientation")

export type ButtonGroupProps = GroupProps & Omit<ButtonVariantProps, "orientation">

export const ButtonGroup: FunctionalComponent<ButtonGroupProps> = (props, { slots }) => {
  const [variantProps, groupProps] = splitProps(props, sharedKeys)
  return h(ButtonPropsProvider, { value: variantProps }, () => h(Group, groupProps, slots))
}
