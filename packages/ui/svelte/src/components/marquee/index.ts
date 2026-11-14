export {
  MarqueeRoot,
  MarqueeRootProvider,
  MarqueeViewport,
  MarqueeContent,
  MarqueeEdge,
  MarqueeItem,
  MarqueeContext,
} from "./marquee"

export type {
  MarqueeRootProps,
  MarqueeRootProviderProps,
  MarqueeViewportProps,
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeContextProps,
} from "./marquee"

export { useMarquee, useMarqueeContext } from "@ark-ui/svelte/marquee"
export type { MarqueePauseStatusDetails, MarqueeSide, UseMarqueeProps, UseMarqueeReturn } from "@ark-ui/svelte/marquee"

export * as Marquee from "./namespace"
