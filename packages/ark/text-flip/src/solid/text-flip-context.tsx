import type { JSX } from "solid-js"
import { type UseTextFlipContext, useTextFlipContext } from "./use-text-flip-context"

export interface TextFlipContextProps {
  children: (context: UseTextFlipContext) => JSX.Element
}

export const TextFlipContext = (props: TextFlipContextProps) => props.children(useTextFlipContext())
