"use client"

import { splitProps } from "@isbatak/panda-ds/helpers"
import { type ButtonVariantProps, button } from "@isbatak/panda-ds/recipes"

import { Group, type GroupProps } from "../group"
import { ButtonPropsProvider } from "./button"

const sharedKeys = button.variantKeys.filter((key) => key !== "orientation")

export interface ButtonGroupProps extends GroupProps, Omit<ButtonVariantProps, "orientation"> {}

export function ButtonGroup(props: ButtonGroupProps) {
  const [variantProps, groupProps] = splitProps(props, sharedKeys)
  return (
    <ButtonPropsProvider value={variantProps}>
      <Group {...groupProps} />
    </ButtonPropsProvider>
  )
}
