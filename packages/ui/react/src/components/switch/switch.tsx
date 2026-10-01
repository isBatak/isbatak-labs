"use client"

import { Switch } from "@ark-ui/react/switch"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { swittch } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(swittch)

export const SwitchRoot = withProvider(Switch.Root, "root")
export type SwitchRootProps = ComponentProps<typeof SwitchRoot>

export const SwitchLabel = withContext(Switch.Label, "label")
export type SwitchLabelProps = ComponentProps<typeof SwitchLabel>

export const SwitchControl = withContext(Switch.Control, "control")
export type SwitchControlProps = ComponentProps<typeof SwitchControl>

export const SwitchThumb = withContext(Switch.Thumb, "thumb")
export type SwitchThumbProps = ComponentProps<typeof SwitchThumb>

export const SwitchHiddenInput = Switch.HiddenInput
export type SwitchHiddenInputProps = ComponentProps<typeof SwitchHiddenInput>

export const SwitchContext = Switch.Context
export type SwitchContextProps = Switch.ContextProps
