import type { ReactNode } from "react"
import { type UseMasonryContext, useMasonryContext } from "./use-masonry-context"

export interface MasonryContextProps {
  children: (context: UseMasonryContext) => ReactNode
}

export const MasonryContext = (props: MasonryContextProps) => props.children(useMasonryContext())
