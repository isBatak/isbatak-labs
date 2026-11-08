export {
  SliderRoot,
  SliderRootProvider,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
  SliderMarkerGroup,
  SliderMarker,
  SliderMarkerIndicator,
  SliderMarkerLabel,
  SliderDraggingIndicator,
  SliderThumbs,
  SliderMarks,
  SliderContext,
} from "./slider"

export type {
  SliderRootProps,
  SliderRootProviderProps,
  SliderLabelProps,
  SliderValueTextProps,
  SliderControlProps,
  SliderTrackProps,
  SliderRangeProps,
  SliderThumbProps,
  SliderHiddenInputProps,
  SliderMarkerGroupProps,
  SliderMarkerProps,
  SliderMarkerIndicatorProps,
  SliderMarkerLabelProps,
  SliderDraggingIndicatorProps,
  SliderThumbsProps,
  SliderMarksProps,
  SliderContextProps,
} from "./slider"

export { useSlider, useSliderContext } from "@ark-ui/svelte/slider"
export type { SliderValueChangeDetails, UseSliderProps, UseSliderReturn } from "@ark-ui/svelte/slider"

export * as Slider from "./namespace"
