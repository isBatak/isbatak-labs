export { default as Root, type DateInputRootProps as RootProps } from "./date-input-root.svelte"
export {
  default as RootProvider,
  type DateInputRootProviderProps as RootProviderProps,
} from "./date-input-root-provider.svelte"
export { default as Label, type DateInputLabelProps as LabelProps } from "./date-input-label.svelte"
export { default as Control, type DateInputControlProps as ControlProps } from "./date-input-control.svelte"
export {
  default as SegmentGroup,
  type DateInputSegmentGroupProps as SegmentGroupProps,
} from "./date-input-segment-group.svelte"
export { default as Segment, type DateInputSegmentProps as SegmentProps } from "./date-input-segment.svelte"
export { default as Segments, type DateInputSegmentsProps as SegmentsProps } from "./date-input-segments.svelte"

import { DateInput } from "@ark-ui/svelte/date-input"

export const HiddenInput = DateInput.HiddenInput
export const Context = DateInput.Context
export const SegmentContext = DateInput.SegmentContext
