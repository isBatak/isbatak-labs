import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import * as textFlip from "@isbatak/zag-text-flip"
import { mergeProps } from "@zag-js/react"
import type { RefAttributes } from "react"
import type { Assign } from "../types"
import { useTextFlipContext } from "./use-text-flip-context"

export interface TextFlipItemBaseProps extends textFlip.ItemProps, PolymorphicProps {}
export interface TextFlipItemProps
  extends Assign<HTMLProps<"span">, TextFlipItemBaseProps>, RefAttributes<HTMLSpanElement> {}

export const TextFlipItem = (props: TextFlipItemProps) => {
  const [itemProps, localProps] = textFlip.splitItemProps(props)
  const api = useTextFlipContext()
  const mergedProps = mergeProps(api.getItemProps(itemProps), localProps)

  return <ark.span {...mergedProps} />
}
