import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { ItemProps, TextFlipProps } from "./text-flip.types"

export const props = createProps<TextFlipProps>()([
  "autoplay",
  "defaultIndex",
  "getRootNode",
  "id",
  "ids",
  "interval",
  "onIndexChange",
])

export const splitProps = createSplitProps<Partial<TextFlipProps>>(props)

export const itemProps = createProps<ItemProps>()(["index"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
