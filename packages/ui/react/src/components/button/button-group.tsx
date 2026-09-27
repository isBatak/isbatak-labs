"use client"

import { type ButtonVariantProps, button } from "@isbatak/panda-ds/recipes"

import { Group, type GroupProps } from "../group"
import { ButtonPropsProvider } from "./button"

export interface ButtonGroupProps extends GroupProps, ButtonVariantProps {}

export function ButtonGroup(props: ButtonGroupProps) {
  const [variantProps, groupProps] = button.splitVariantProps(props)
  return (
    <ButtonPropsProvider value={variantProps}>
      <Group {...groupProps} />
    </ButtonPropsProvider>
  )
}
