import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { ItemProps, WheelPickerProps } from "./wheel-picker.types"

export const props = createProps<WheelPickerProps>()([
  "aria-label",
  "aria-labelledby",
  "disabled",
  "form",
  "id",
  "ids",
  "itemHeight",
  "items",
  "loop",
  "name",
  "onValueChange",
  "value",
  "visibleCount",
])

export const splitProps = createSplitProps<Partial<WheelPickerProps>>(props)

export const itemProps = createProps<ItemProps>()(["row"])
export const splitItemProps = createSplitProps<ItemProps>(itemProps)
