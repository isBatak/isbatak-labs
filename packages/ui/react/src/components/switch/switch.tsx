"use client"

import { ark } from "@ark-ui/react/factory"
import { Switch, useSwitchContext } from "@ark-ui/react/switch"
import { dataAttr } from "@ark-ui/react/utils"
import type { ComponentProps, ReactNode } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { swittch } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(swittch)

export const SwitchRoot = withProvider(Switch.Root, "root")
export type SwitchRootProps = ComponentProps<typeof SwitchRoot>

export const SwitchRootProvider = withProvider(Switch.RootProvider, "root")
export type SwitchRootProviderProps = ComponentProps<typeof SwitchRootProvider>

export const SwitchLabel = withContext(Switch.Label, "label")
export type SwitchLabelProps = ComponentProps<typeof SwitchLabel>

export const SwitchControl = withContext(Switch.Control, "control")
export type SwitchControlProps = ComponentProps<typeof SwitchControl>

export const SwitchThumb = withContext(Switch.Thumb, "thumb")
export type SwitchThumbProps = ComponentProps<typeof SwitchThumb>

interface SwitchStateContentProps extends ComponentProps<typeof ark.span> {
  fallback?: ReactNode | undefined
}

function SwitchStateContent({ fallback, children, ...props }: SwitchStateContentProps) {
  const api = useSwitchContext()
  return (
    <ark.span data-checked={dataAttr(api.checked)} {...props}>
      {api.checked ? children : fallback}
    </ark.span>
  )
}

export const SwitchIndicator = withContext(SwitchStateContent, "indicator")
export type SwitchIndicatorProps = ComponentProps<typeof SwitchIndicator>

export const SwitchThumbIndicator = SwitchStateContent
export type SwitchThumbIndicatorProps = SwitchStateContentProps

export const SwitchHiddenInput = Switch.HiddenInput
export type SwitchHiddenInputProps = ComponentProps<typeof SwitchHiddenInput>

export const SwitchContext = Switch.Context
export type SwitchContextProps = Switch.ContextProps
