import { ScrollArea } from "@ark-ui/svelte/scroll-area"

export { default as ScrollAreaRoot, type ScrollAreaRootProps } from "./scroll-area-root.svelte"
export { default as ScrollAreaRootProvider, type ScrollAreaRootProviderProps } from "./scroll-area-root-provider.svelte"
export { default as ScrollAreaViewport, type ScrollAreaViewportProps } from "./scroll-area-viewport.svelte"
export { default as ScrollAreaContent, type ScrollAreaContentProps } from "./scroll-area-content.svelte"
export { default as ScrollAreaScrollbar, type ScrollAreaScrollbarProps } from "./scroll-area-scrollbar.svelte"
export { default as ScrollAreaThumb, type ScrollAreaThumbProps } from "./scroll-area-thumb.svelte"
export { default as ScrollAreaCorner, type ScrollAreaCornerProps } from "./scroll-area-corner.svelte"
export const ScrollAreaContext = ScrollArea.Context
export type ScrollAreaContextProps = ScrollArea.ContextProps
