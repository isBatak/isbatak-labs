"use client"

import { Checkbox, useCheckboxContext } from "@ark-ui/react/checkbox"
import type { ComponentProps } from "react"
import { createSlotRecipeContext, styled } from "@isbatak/panda-ds/jsx"
import { checkbox } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(checkbox)

export const CheckboxRoot = withProvider(Checkbox.Root, "root")
export type CheckboxRootProps = ComponentProps<typeof CheckboxRoot>

export const CheckboxRootProvider = withProvider(Checkbox.RootProvider, "root")
export type CheckboxRootProviderProps = ComponentProps<typeof CheckboxRootProvider>

export const CheckboxLabel = withContext(Checkbox.Label, "label")
export type CheckboxLabelProps = ComponentProps<typeof CheckboxLabel>

function CheckboxMark(props: ComponentProps<"svg">) {
  const api = useCheckboxContext()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3px"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {api.indeterminate ? <path d="M5 12h14" /> : api.checked ? <polyline points="20 6 9 17 4 12" /> : null}
    </svg>
  )
}

export const CheckboxIndicator = withContext(CheckboxMark, "indicator")
export type CheckboxIndicatorProps = ComponentProps<typeof CheckboxIndicator>

export const CheckboxControl = withContext(Checkbox.Control, "control", {
  defaultProps: { children: <CheckboxIndicator /> },
})
export type CheckboxControlProps = ComponentProps<typeof CheckboxControl>

export const CheckboxGroup = styled(Checkbox.Group, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
  },
})
export type CheckboxGroupProps = ComponentProps<typeof CheckboxGroup>

export const CheckboxHiddenInput = Checkbox.HiddenInput
export type CheckboxHiddenInputProps = Checkbox.HiddenInputProps

export const CheckboxContext = Checkbox.Context
export type CheckboxContextProps = Checkbox.ContextProps
