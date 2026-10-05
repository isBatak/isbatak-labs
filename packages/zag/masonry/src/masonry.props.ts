import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { ItemProps, MasonryProps } from "./masonry.types"

export const props = createProps<MasonryProps>()([
  "columns",
  "dir",
  "gap",
  "getRootNode",
  "id",
  "ids",
  "minColumnWidth",
  "onLayoutChange",
  "sequential",
])

export const splitProps = createSplitProps<Partial<MasonryProps>>(props)

export const itemProps = createProps<ItemProps>()(["span", "value"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
