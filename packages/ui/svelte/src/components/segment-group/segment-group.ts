import { SegmentGroup } from "@ark-ui/svelte/segment-group"

export { default as SegmentGroupRoot, type SegmentGroupRootProps } from "./segment-group-root.svelte"
export { default as SegmentGroupIndicator, type SegmentGroupIndicatorProps } from "./segment-group-indicator.svelte"
export { default as SegmentGroupItem, type SegmentGroupItemProps } from "./segment-group-item.svelte"
export { default as SegmentGroupItemText, type SegmentGroupItemTextProps } from "./segment-group-item-text.svelte"
export {
  default as SegmentGroupItemControl,
  type SegmentGroupItemControlProps,
} from "./segment-group-item-control.svelte"
export const SegmentGroupItemHiddenInput = SegmentGroup.ItemHiddenInput
export type SegmentGroupItemHiddenInputProps = SegmentGroup.ItemHiddenInputProps
export const SegmentGroupContext = SegmentGroup.Context
export const SegmentGroupItemContext = SegmentGroup.ItemContext
export type SegmentGroupContextProps = SegmentGroup.ContextProps
export type SegmentGroupItemContextProps = SegmentGroup.ItemContextProps
