import type { JSX } from "solid-js"
import { type UseMasonryContext, useMasonryContext } from "./use-masonry-context"

export interface MasonryContextProps {
  children: (context: UseMasonryContext) => JSX.Element
}

export const MasonryContext = (props: MasonryContextProps) => props.children(useMasonryContext())
