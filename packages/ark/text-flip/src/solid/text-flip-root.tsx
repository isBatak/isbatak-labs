import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import * as textFlip from "@isbatak/zag-text-flip"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import type { Assign } from "../types"
import { useTextFlip, type UseTextFlipProps } from "./use-text-flip"
import { TextFlipProvider } from "./use-text-flip-context"

export interface TextFlipRootBaseProps extends UseTextFlipProps, PolymorphicProps<"span"> {}
export interface TextFlipRootProps extends Assign<HTMLProps<"span">, TextFlipRootBaseProps> {}

export const TextFlipRoot = (props: TextFlipRootProps) => {
  const [useTextFlipProps, localProps] = splitProps(props, textFlip.props as (keyof TextFlipRootProps)[])
  const api = useTextFlip(useTextFlipProps as UseTextFlipProps)
  const mergedProps = mergeProps(() => api().getRootProps(), localProps)

  return (
    <TextFlipProvider value={api}>
      <ark.span {...mergedProps} />
    </TextFlipProvider>
  )
}
