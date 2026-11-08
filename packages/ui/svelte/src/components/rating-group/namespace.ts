export { default as Root, type RatingGroupRootProps as RootProps } from "./rating-group-root.svelte"
export {
  default as RootProvider,
  type RatingGroupRootProviderProps as RootProviderProps,
} from "./rating-group-root-provider.svelte"
export { default as Label, type RatingGroupLabelProps as LabelProps } from "./rating-group-label.svelte"
export { default as Control, type RatingGroupControlProps as ControlProps } from "./rating-group-control.svelte"
export { default as Item, type RatingGroupItemProps as ItemProps } from "./rating-group-item.svelte"
export {
  default as ItemIndicator,
  type RatingGroupItemIndicatorProps as ItemIndicatorProps,
} from "./rating-group-item-indicator.svelte"
export { default as Items, type RatingGroupItemsProps as ItemsProps } from "./rating-group-items.svelte"
export type { RatingGroupIconProps as IconProps } from "./rating-group-item-indicator.svelte"

import { RatingGroup } from "@ark-ui/svelte/rating-group"

export const HiddenInput = RatingGroup.HiddenInput
export const Context = RatingGroup.Context
export const ItemContext = RatingGroup.ItemContext
