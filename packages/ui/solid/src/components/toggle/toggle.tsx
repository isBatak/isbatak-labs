import { Toggle } from "@ark-ui/solid/toggle"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const ToggleRoot = styled(Toggle.Root)
export type ToggleRootProps = ComponentProps<typeof ToggleRoot>

export const ToggleIndicator = styled(Toggle.Indicator)
export type ToggleIndicatorProps = ComponentProps<typeof ToggleIndicator>

export const ToggleContext = Toggle.Context
