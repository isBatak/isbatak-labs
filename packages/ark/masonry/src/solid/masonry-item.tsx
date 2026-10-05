import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/solid/factory"
import * as masonry from "@isbatak/zag-masonry"
import { mergeProps } from "@zag-js/solid"
import { splitProps } from "solid-js"
import type { Assign } from "../types"
import { useMasonryContext } from "./use-masonry-context"

export interface MasonryItemBaseProps extends masonry.ItemProps, PolymorphicProps<"div"> {}
export interface MasonryItemProps extends Assign<HTMLProps<"div">, MasonryItemBaseProps> {}

export const MasonryItem = (props: MasonryItemProps) => {
  const [itemProps, localProps] = splitProps(props, ["value", "span"])
  const api = useMasonryContext()
  const mergedProps = mergeProps(() => api().getItemProps(itemProps), localProps)

  return <ark.div {...mergedProps} />
}
