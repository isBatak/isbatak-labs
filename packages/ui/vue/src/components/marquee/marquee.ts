import { Marquee } from "@ark-ui/vue/marquee"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { marquee } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(marquee)

export const MarqueeRoot = withProvider(Marquee.Root, "root")
export type MarqueeRootProps = ComponentProps<typeof MarqueeRoot>

export const MarqueeRootProvider = withProvider(Marquee.RootProvider, "root")
export type MarqueeRootProviderProps = ComponentProps<typeof MarqueeRootProvider>

export const MarqueeViewport = withContext(Marquee.Viewport, "viewport")
export type MarqueeViewportProps = ComponentProps<typeof MarqueeViewport>

export const MarqueeContent = withContext(Marquee.Content, "content")
export type MarqueeContentProps = ComponentProps<typeof MarqueeContent>

export const MarqueeEdge = withContext(Marquee.Edge, "edge")
export type MarqueeEdgeProps = ComponentProps<typeof MarqueeEdge>

export const MarqueeItem = withContext(Marquee.Item, "item")
export type MarqueeItemProps = ComponentProps<typeof MarqueeItem>

export const MarqueeContext = Marquee.Context
export type MarqueeContextProps = Marquee.ContextProps
