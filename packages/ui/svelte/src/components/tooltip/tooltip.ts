import { Tooltip } from "@ark-ui/svelte/tooltip"

export { default as TooltipRoot, type TooltipRootProps } from "./tooltip-root.svelte"
export { default as TooltipTrigger, type TooltipTriggerProps } from "./tooltip-trigger.svelte"
export { default as TooltipPositioner, type TooltipPositionerProps } from "./tooltip-positioner.svelte"
export { default as TooltipContent, type TooltipContentProps } from "./tooltip-content.svelte"
export { default as TooltipArrow, type TooltipArrowProps } from "./tooltip-arrow.svelte"
export { default as TooltipArrowTip, type TooltipArrowTipProps } from "./tooltip-arrow-tip.svelte"
export const TooltipContext = Tooltip.Context
export type TooltipContextProps = Tooltip.ContextProps
