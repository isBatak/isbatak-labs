import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import * as textFlip from "@isbatak/zag-text-flip"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import type { Assign } from "../types"
import { useTextFlip, type UseTextFlipProps } from "./use-text-flip"
import { TextFlipProvider } from "./use-text-flip-context"

export interface TextFlipRootBaseProps extends UseTextFlipProps, PolymorphicProps {}
export interface TextFlipRootProps
  extends Assign<HTMLProps<"span">, TextFlipRootBaseProps>, RefAttributes<HTMLSpanElement> {}

export const TextFlipRoot = (props: TextFlipRootProps) => {
  const [useTextFlipProps, localProps] = textFlip.splitProps(props)
  const api = useTextFlip(useTextFlipProps)
  const mergedProps = mergeProps(api.getRootProps(), localProps)

  return (
    <TextFlipProvider value={api}>
      <ark.span {...mergedProps} />
    </TextFlipProvider>
  )
}
