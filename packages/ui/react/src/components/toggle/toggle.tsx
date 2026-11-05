"use client"

import { Toggle } from "@ark-ui/react/toggle"
import { styled } from "@isbatak/panda-ds/jsx"
import type { ComponentProps } from "react"

export const ToggleRoot = styled(Toggle.Root)
export type ToggleRootProps = ComponentProps<typeof ToggleRoot>

export const ToggleIndicator = styled(Toggle.Indicator)
export type ToggleIndicatorProps = ComponentProps<typeof ToggleIndicator>

export const ToggleContext = Toggle.Context
