"use client"

import { Checkbox, useCheckboxContext } from "@ark-ui/react/checkbox"
import { ark } from "@ark-ui/react/factory"
import { dataAttr } from "@ark-ui/react/utils"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { checkboxCard } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(checkboxCard)

export const CheckboxCardRoot = withProvider(Checkbox.Root, "root")
export type CheckboxCardRootProps = ComponentProps<typeof CheckboxCardRoot>

export const CheckboxCardRootProvider = withProvider(Checkbox.RootProvider, "root")
export type CheckboxCardRootProviderProps = ComponentProps<typeof CheckboxCardRootProvider>

export const CheckboxCardControl = withContext(ark.div, "control")
export type CheckboxCardControlProps = ComponentProps<typeof CheckboxCardControl>

export const CheckboxCardContent = withContext(ark.div, "content")
export type CheckboxCardContentProps = ComponentProps<typeof CheckboxCardContent>

export const CheckboxCardLabel = withContext(Checkbox.Label, "label")
export type CheckboxCardLabelProps = ComponentProps<typeof CheckboxCardLabel>

export const CheckboxCardDescription = withContext(ark.div, "description")
export type CheckboxCardDescriptionProps = ComponentProps<typeof CheckboxCardDescription>

function CheckboxCardMark(props: ComponentProps<"svg">) {
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
      data-state={api.indeterminate ? "indeterminate" : api.checked ? "checked" : "unchecked"}
      data-disabled={dataAttr(api.disabled)}
      {...props}
    >
      {api.indeterminate ? <path d="M5 12h14" /> : api.checked ? <polyline points="20 6 9 17 4 12" /> : null}
    </svg>
  )
}

export const CheckboxCardIndicator = withContext(CheckboxCardMark, "indicator")
export type CheckboxCardIndicatorProps = ComponentProps<typeof CheckboxCardIndicator>

export const CheckboxCardAddon = withContext(ark.div, "addon")
export type CheckboxCardAddonProps = ComponentProps<typeof CheckboxCardAddon>

export const CheckboxCardHiddenInput = Checkbox.HiddenInput
export type CheckboxCardHiddenInputProps = Checkbox.HiddenInputProps

export const CheckboxCardContext = Checkbox.Context
export type CheckboxCardContextProps = Checkbox.ContextProps
