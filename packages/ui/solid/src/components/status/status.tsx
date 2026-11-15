import { ark } from "@ark-ui/solid/factory"
import type { ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { status } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(status)

export const StatusRoot = withProvider(ark.div, "root")
export type StatusRootProps = ComponentProps<typeof StatusRoot>

export const StatusPropsProvider = PropsProvider

export const StatusIndicator = withContext(ark.div, "indicator")
export type StatusIndicatorProps = ComponentProps<typeof StatusIndicator>
