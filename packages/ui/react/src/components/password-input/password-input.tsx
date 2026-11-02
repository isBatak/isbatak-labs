"use client"

import { PasswordInput } from "@ark-ui/react/password-input"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { passwordInput } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(passwordInput)

export const PasswordInputRoot = withProvider(PasswordInput.Root, "root")
export type PasswordInputRootProps = ComponentProps<typeof PasswordInputRoot>

export const PasswordInputRootProvider = withProvider(PasswordInput.RootProvider, "root")
export type PasswordInputRootProviderProps = ComponentProps<typeof PasswordInputRootProvider>

export const PasswordInputLabel = withContext(PasswordInput.Label, "label")
export type PasswordInputLabelProps = ComponentProps<typeof PasswordInputLabel>

export const PasswordInputControl = withContext(PasswordInput.Control, "control")
export type PasswordInputControlProps = ComponentProps<typeof PasswordInputControl>

export const PasswordInputInput = withContext(PasswordInput.Input, "input")
export type PasswordInputInputProps = ComponentProps<typeof PasswordInputInput>

export const PasswordInputVisibilityTrigger = withContext(PasswordInput.VisibilityTrigger, "visibilityTrigger")
export type PasswordInputVisibilityTriggerProps = ComponentProps<typeof PasswordInputVisibilityTrigger>

export const PasswordInputIndicator = withContext(PasswordInput.Indicator, "indicator")
export type PasswordInputIndicatorProps = ComponentProps<typeof PasswordInputIndicator>

export const PasswordInputContext = PasswordInput.Context
export type PasswordInputContextProps = PasswordInput.ContextProps
