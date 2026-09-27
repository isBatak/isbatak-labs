import { type ButtonVariantProps, button } from "@isbatak/panda-ds/recipes"
import { splitProps } from "solid-js"

import { Group, type GroupProps } from "../group"
import { ButtonPropsProvider } from "./button"

export interface ButtonGroupProps extends GroupProps, ButtonVariantProps {}

export function ButtonGroup(props: ButtonGroupProps) {
  const [variantProps, groupProps] = splitProps(props, button.variantKeys)
  return (
    <ButtonPropsProvider value={variantProps}>
      <Group {...groupProps} />
    </ButtonPropsProvider>
  )
}
