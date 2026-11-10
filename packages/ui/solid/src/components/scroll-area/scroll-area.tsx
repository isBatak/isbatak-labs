import { ScrollArea } from "@ark-ui/solid/scroll-area"
import { type ComponentProps, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { scrollArea } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(scrollArea)

export const ScrollAreaRoot = withProvider(ScrollArea.Root, "root")
export type ScrollAreaRootProps = ComponentProps<typeof ScrollAreaRoot>

export const ScrollAreaRootProvider = withProvider(ScrollArea.RootProvider, "root")
export type ScrollAreaRootProviderProps = ComponentProps<typeof ScrollAreaRootProvider>

export const ScrollAreaViewport = withContext(ScrollArea.Viewport, "viewport")
export type ScrollAreaViewportProps = ComponentProps<typeof ScrollAreaViewport>

export const ScrollAreaContent = withContext(ScrollArea.Content, "content")
export type ScrollAreaContentProps = ComponentProps<typeof ScrollAreaContent>

export const ScrollAreaThumb = withContext(ScrollArea.Thumb, "thumb")
export type ScrollAreaThumbProps = ComponentProps<typeof ScrollAreaThumb>

const StyledScrollAreaScrollbar = withContext(ScrollArea.Scrollbar, "scrollbar")
export type ScrollAreaScrollbarProps = ComponentProps<typeof StyledScrollAreaScrollbar>

export function ScrollAreaScrollbar(props: ScrollAreaScrollbarProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledScrollAreaScrollbar {...rest}>{local.children ?? <ScrollAreaThumb />}</StyledScrollAreaScrollbar>
}

export const ScrollAreaCorner = withContext(ScrollArea.Corner, "corner")
export type ScrollAreaCornerProps = ComponentProps<typeof ScrollAreaCorner>

export const ScrollAreaContext = ScrollArea.Context
export type ScrollAreaContextProps = ScrollArea.ContextProps
