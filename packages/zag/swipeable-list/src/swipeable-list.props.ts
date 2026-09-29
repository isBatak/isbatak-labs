import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { ItemActionProps, ItemActionsProps, ItemProps, SwipeableListProps } from "./swipeable-list.types"

export const props = createProps<SwipeableListProps>()([
  "defaultOpenItem",
  "dir",
  "disabled",
  "fullSwipe",
  "fullSwipeThreshold",
  "getRootNode",
  "id",
  "ids",
  "onFullSwipe",
  "onOpenItemChange",
  "openItem",
  "resistance",
  "snapBounce",
  "swipeThreshold",
  "threshold",
])

export const splitProps = createSplitProps<Partial<SwipeableListProps>>(props)

export const itemProps = createProps<ItemProps>()(["disabled", "fullSwipe", "value"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)

export const itemActionsProps = createProps<ItemActionsProps>()(["disabled", "fullSwipe", "side", "value"])
export const splitItemActionsProps = createSplitProps<ItemActionsProps>(itemActionsProps)

export const itemActionProps = createProps<ItemActionProps>()([
  "closeOnClick",
  "disabled",
  "fullSwipe",
  "side",
  "value",
])
export const splitItemActionProps = createSplitProps<ItemActionProps>(itemActionProps)
