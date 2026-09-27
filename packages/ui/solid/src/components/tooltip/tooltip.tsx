import { Tooltip } from "@ark-ui/solid/tooltip"
import type { ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { tooltip } from "@isbatak/panda-ds/recipes"

const { withRootProvider, withContext } = createSlotRecipeContext(tooltip)

export const TooltipRoot = withRootProvider(Tooltip.Root)
export type TooltipRootProps = ComponentProps<typeof TooltipRoot>

export const TooltipTrigger = withContext(Tooltip.Trigger, "trigger")
export type TooltipTriggerProps = ComponentProps<typeof TooltipTrigger>

export const TooltipPositioner = withContext(Tooltip.Positioner, "positioner")
export type TooltipPositionerProps = ComponentProps<typeof TooltipPositioner>

export const TooltipContent = withContext(Tooltip.Content, "content")
export type TooltipContentProps = ComponentProps<typeof TooltipContent>

export const TooltipArrow = withContext(Tooltip.Arrow, "arrow")
export type TooltipArrowProps = ComponentProps<typeof TooltipArrow>

export const TooltipArrowTip = withContext(Tooltip.ArrowTip, "arrowTip")
export type TooltipArrowTipProps = ComponentProps<typeof TooltipArrowTip>

export const TooltipContext = Tooltip.Context
export type TooltipContextProps = Tooltip.ContextProps
