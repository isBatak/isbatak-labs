import { Marquee } from "@ark-ui/svelte/marquee"

export { default as MarqueeRoot, type MarqueeRootProps } from "./marquee-root.svelte"
export { default as MarqueeRootProvider, type MarqueeRootProviderProps } from "./marquee-root-provider.svelte"
export { default as MarqueeViewport, type MarqueeViewportProps } from "./marquee-viewport.svelte"
export { default as MarqueeContent, type MarqueeContentProps } from "./marquee-content.svelte"
export { default as MarqueeEdge, type MarqueeEdgeProps } from "./marquee-edge.svelte"
export { default as MarqueeItem, type MarqueeItemProps } from "./marquee-item.svelte"
export const MarqueeContext = Marquee.Context
export type MarqueeContextProps = Marquee.ContextProps
