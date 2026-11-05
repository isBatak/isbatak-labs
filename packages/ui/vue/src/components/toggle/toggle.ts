import { Toggle } from "@ark-ui/vue/toggle"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const ToggleRoot = styled(Toggle.Root)
export type ToggleRootProps = ComponentProps<typeof ToggleRoot>

export const ToggleIndicator = styled(Toggle.Indicator)
export type ToggleIndicatorProps = ComponentProps<typeof ToggleIndicator>

export const ToggleContext = Toggle.Context
