"use client"

import { ark } from "@ark-ui/react/factory"
import { Field, useFieldContext } from "@ark-ui/react/field"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { field } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(field)

export const FieldRoot = withProvider(Field.Root, "root")
export type FieldRootProps = ComponentProps<typeof FieldRoot>

export const FieldRootProvider = withProvider(Field.RootProvider, "root")
export type FieldRootProviderProps = ComponentProps<typeof FieldRootProvider>

export const FieldLabel = withContext(Field.Label, "label")
export type FieldLabelProps = ComponentProps<typeof FieldLabel>

export const FieldHelperText = withContext(Field.HelperText, "helperText")
export type FieldHelperTextProps = ComponentProps<typeof FieldHelperText>

export const FieldErrorText = withContext(Field.ErrorText, "errorText")
export type FieldErrorTextProps = ComponentProps<typeof FieldErrorText>

export const FieldRequiredIndicator = withContext(Field.RequiredIndicator, "requiredIndicator", {
  defaultProps: { children: "*" },
})
export type FieldRequiredIndicatorProps = ComponentProps<typeof FieldRequiredIndicator>

function OptionalText({ children = "(optional)", ...props }: ComponentProps<typeof ark.span>) {
  const fieldContext = useFieldContext()
  if (fieldContext?.required) return null
  return <ark.span {...props}>{children}</ark.span>
}

export const FieldOptionalText = withContext(OptionalText, "optionalText")
export type FieldOptionalTextProps = ComponentProps<typeof FieldOptionalText>

export const FieldContext = Field.Context
export type FieldContextProps = Field.ContextProps
