import { Carousel } from "@ark-ui/svelte/carousel"

export { default as CarouselRoot, type CarouselRootProps } from "./carousel-root.svelte"
export { default as CarouselRootProvider, type CarouselRootProviderProps } from "./carousel-root-provider.svelte"
export { default as CarouselItemGroup, type CarouselItemGroupProps } from "./carousel-item-group.svelte"
export { default as CarouselItem, type CarouselItemProps } from "./carousel-item.svelte"
export { default as CarouselControl, type CarouselControlProps } from "./carousel-control.svelte"
export { default as CarouselPrevTrigger, type CarouselPrevTriggerProps } from "./carousel-prev-trigger.svelte"
export { default as CarouselNextTrigger, type CarouselNextTriggerProps } from "./carousel-next-trigger.svelte"
export { default as CarouselIndicatorGroup, type CarouselIndicatorGroupProps } from "./carousel-indicator-group.svelte"
export { default as CarouselIndicator, type CarouselIndicatorProps } from "./carousel-indicator.svelte"
export { default as CarouselIndicators, type CarouselIndicatorsProps } from "./carousel-indicators.svelte"
export {
  default as CarouselAutoplayTrigger,
  type CarouselAutoplayTriggerProps,
} from "./carousel-autoplay-trigger.svelte"
export {
  default as CarouselAutoplayIndicator,
  type CarouselAutoplayIndicatorProps,
} from "./carousel-autoplay-indicator.svelte"
export { default as CarouselProgressText, type CarouselProgressTextProps } from "./carousel-progress-text.svelte"
export const CarouselContext = Carousel.Context
export type CarouselContextProps = Carousel.ContextProps
