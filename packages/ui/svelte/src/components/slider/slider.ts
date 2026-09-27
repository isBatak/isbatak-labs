import { Slider } from "@ark-ui/svelte/slider"

export { default as SliderRoot, type SliderRootProps } from "./slider-root.svelte"
export { default as SliderLabel, type SliderLabelProps } from "./slider-label.svelte"
export { default as SliderValueText, type SliderValueTextProps } from "./slider-value-text.svelte"
export { default as SliderControl, type SliderControlProps } from "./slider-control.svelte"
export { default as SliderTrack, type SliderTrackProps } from "./slider-track.svelte"
export { default as SliderRange, type SliderRangeProps } from "./slider-range.svelte"
export { default as SliderThumb, type SliderThumbProps } from "./slider-thumb.svelte"
export const SliderHiddenInput = Slider.HiddenInput
export type SliderHiddenInputProps = Slider.HiddenInputProps
export { default as SliderMarkerGroup, type SliderMarkerGroupProps } from "./slider-marker-group.svelte"
export { default as SliderMarker, type SliderMarkerProps } from "./slider-marker.svelte"
export { default as SliderMarkerIndicator, type SliderMarkerIndicatorProps } from "./slider-marker-indicator.svelte"
export { default as SliderMarkerLabel, type SliderMarkerLabelProps } from "./slider-marker-label.svelte"
export {
  default as SliderDraggingIndicator,
  type SliderDraggingIndicatorProps,
} from "./slider-dragging-indicator.svelte"
export const SliderContext = Slider.Context
export type SliderContextProps = Slider.ContextProps
