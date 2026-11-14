import { ark } from "@ark-ui/vue/factory"
import { emptyState } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(emptyState)

export const EmptyStateRoot = withProvider(ark.div, "root")
export type EmptyStateRootProps = ComponentProps<typeof EmptyStateRoot>

export const EmptyStatePropsProvider = PropsProvider

export const EmptyStateContent = withContext(ark.div, "content")
export type EmptyStateContentProps = ComponentProps<typeof EmptyStateContent>

export const EmptyStateIndicator = withContext(ark.div, "indicator")
export type EmptyStateIndicatorProps = ComponentProps<typeof EmptyStateIndicator>

export const EmptyStateTitle = withContext(ark.h3, "title")
export type EmptyStateTitleProps = ComponentProps<typeof EmptyStateTitle>

export const EmptyStateDescription = withContext(ark.p, "description")
export type EmptyStateDescriptionProps = ComponentProps<typeof EmptyStateDescription>
