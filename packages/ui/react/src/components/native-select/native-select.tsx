"use client"

import { ark } from "@ark-ui/react/factory"
import { Field } from "@ark-ui/react/field"
import type { ComponentProps } from "react"
import { nativeSelect } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(nativeSelect)

export const NativeSelectRoot = withProvider(ark.div, "root")
export type NativeSelectRootProps = ComponentProps<typeof NativeSelectRoot>

export const NativeSelectField = withContext(Field.Select, "field")
export type NativeSelectFieldProps = ComponentProps<typeof NativeSelectField>

const StyledNativeSelectIndicator = withContext(ark.div, "indicator")
export type NativeSelectIndicatorProps = ComponentProps<typeof StyledNativeSelectIndicator>

export function NativeSelectIndicator({ children, ...props }: NativeSelectIndicatorProps) {
  return (
    <StyledNativeSelectIndicator {...props}>{children ?? <Icon name="chevron-down" />}</StyledNativeSelectIndicator>
  )
}
