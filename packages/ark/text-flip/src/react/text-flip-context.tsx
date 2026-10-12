import type { ReactNode } from "react"
import { type UseTextFlipContext, useTextFlipContext } from "./use-text-flip-context"

export interface TextFlipContextProps {
  children: (context: UseTextFlipContext) => ReactNode
}

export const TextFlipContext = (props: TextFlipContextProps) => props.children(useTextFlipContext())
