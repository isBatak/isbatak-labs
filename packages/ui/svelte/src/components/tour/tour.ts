import { Tour } from "@ark-ui/svelte/tour"

export { default as TourRoot, type TourRootProps } from "./tour-root.svelte"
export { default as TourBackdrop, type TourBackdropProps } from "./tour-backdrop.svelte"
export { default as TourSpotlight, type TourSpotlightProps } from "./tour-spotlight.svelte"
export { default as TourPositioner, type TourPositionerProps } from "./tour-positioner.svelte"
export { default as TourContent, type TourContentProps } from "./tour-content.svelte"
export { default as TourArrow, type TourArrowProps } from "./tour-arrow.svelte"
export { default as TourArrowTip, type TourArrowTipProps } from "./tour-arrow-tip.svelte"
export { default as TourTitle, type TourTitleProps } from "./tour-title.svelte"
export { default as TourDescription, type TourDescriptionProps } from "./tour-description.svelte"
export { default as TourProgressText, type TourProgressTextProps } from "./tour-progress-text.svelte"
export { default as TourCloseTrigger, type TourCloseTriggerProps } from "./tour-close-trigger.svelte"
export { default as TourControl, type TourControlProps } from "./tour-control.svelte"
export { default as TourActionTrigger, type TourActionTriggerProps } from "./tour-action-trigger.svelte"
export const TourContext = Tour.Context
export type TourContextProps = Tour.ContextProps
