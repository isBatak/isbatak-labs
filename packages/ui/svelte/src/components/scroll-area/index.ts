export {
  ScrollAreaRoot,
  ScrollAreaRootProvider,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
  ScrollAreaContext,
} from "./scroll-area"

export type {
  ScrollAreaRootProps,
  ScrollAreaRootProviderProps,
  ScrollAreaViewportProps,
  ScrollAreaContentProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaCornerProps,
  ScrollAreaContextProps,
} from "./scroll-area"

export { useScrollArea, useScrollAreaContext } from "@ark-ui/svelte/scroll-area"
export type {
  ScrollAreaScrollToDetails,
  ScrollAreaScrollToEdge,
  ScrollAreaScrollToEdgeDetails,
  UseScrollAreaProps,
  UseScrollAreaReturn,
} from "@ark-ui/svelte/scroll-area"

export * as ScrollArea from "./namespace"
