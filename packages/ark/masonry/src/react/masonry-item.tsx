import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import * as masonry from "@isbatak/zag-masonry"
import { mergeProps } from "@zag-js/react"
import { forwardRef } from "react"
import type { Assign } from "../types"
import { useMasonryContext } from "./use-masonry-context"

export interface MasonryItemBaseProps extends masonry.ItemProps, PolymorphicProps {}
export interface MasonryItemProps extends Assign<HTMLProps<"div">, MasonryItemBaseProps> {}

export const MasonryItem = forwardRef<HTMLDivElement, MasonryItemProps>((props, ref) => {
  const [itemProps, localProps] = masonry.splitItemProps(props)
  const api = useMasonryContext()
  const mergedProps = mergeProps(api.getItemProps(itemProps), localProps)

  return <ark.div {...mergedProps} ref={ref} />
})

MasonryItem.displayName = "MasonryItem"
