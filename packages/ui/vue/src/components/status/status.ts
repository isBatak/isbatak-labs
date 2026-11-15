import { ark } from "@ark-ui/vue/factory"
import { status } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(status)

export const StatusRoot = withProvider(ark.div, "root")
export type StatusRootProps = ComponentProps<typeof StatusRoot>

export const StatusPropsProvider = PropsProvider

export const StatusIndicator = withContext(ark.div, "indicator")
export type StatusIndicatorProps = ComponentProps<typeof StatusIndicator>
