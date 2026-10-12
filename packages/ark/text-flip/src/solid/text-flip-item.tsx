import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import * as textFlip from "@isbatak/zag-text-flip"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import type { Assign } from "../types"
import { useTextFlipContext } from "./use-text-flip-context"

export interface TextFlipItemBaseProps extends textFlip.ItemProps, PolymorphicProps<"span"> {}
export interface TextFlipItemProps extends Assign<HTMLProps<"span">, TextFlipItemBaseProps> {}

export const TextFlipItem = (props: TextFlipItemProps) => {
  const [itemProps, localProps] = splitProps(props, ["index"])
  const api = useTextFlipContext()
  const mergedProps = mergeProps(() => api().getItemProps(itemProps), localProps)

  return <ark.span {...mergedProps} />
}
