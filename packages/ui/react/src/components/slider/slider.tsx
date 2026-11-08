"use client"

import { Slider, useSliderContext } from "@ark-ui/react/slider"
import type { ComponentProps, ReactNode } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { slider } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(slider)

export const SliderRoot = withProvider(Slider.Root, "root", { forwardProps: ["orientation"] })
export type SliderRootProps = ComponentProps<typeof SliderRoot>

export const SliderRootProvider = withProvider(Slider.RootProvider, "root", { forwardProps: ["orientation"] })
export type SliderRootProviderProps = ComponentProps<typeof SliderRootProvider>

export const SliderLabel = withContext(Slider.Label, "label")
export type SliderLabelProps = ComponentProps<typeof SliderLabel>

export const SliderValueText = withContext(Slider.ValueText, "valueText")
export type SliderValueTextProps = ComponentProps<typeof SliderValueText>

export const SliderControl = withContext(Slider.Control, "control")
export type SliderControlProps = ComponentProps<typeof SliderControl>

export const SliderTrack = withContext(Slider.Track, "track")
export type SliderTrackProps = ComponentProps<typeof SliderTrack>

export const SliderRange = withContext(Slider.Range, "range")
export type SliderRangeProps = ComponentProps<typeof SliderRange>

export const SliderThumb = withContext(Slider.Thumb, "thumb")
export type SliderThumbProps = ComponentProps<typeof SliderThumb>

export const SliderHiddenInput = Slider.HiddenInput
export type SliderHiddenInputProps = ComponentProps<typeof SliderHiddenInput>

export const SliderMarkerGroup = withContext(Slider.MarkerGroup, "markerGroup")
export type SliderMarkerGroupProps = ComponentProps<typeof SliderMarkerGroup>

export const SliderMarker = withContext(Slider.Marker, "marker")
export type SliderMarkerProps = ComponentProps<typeof SliderMarker>

export const SliderMarkerIndicator = withContext("div", "markerIndicator")
export type SliderMarkerIndicatorProps = ComponentProps<typeof SliderMarkerIndicator>

export const SliderMarkerLabel = withContext("span", "markerLabel")
export type SliderMarkerLabelProps = ComponentProps<typeof SliderMarkerLabel>

export const SliderDraggingIndicator = withContext(Slider.DraggingIndicator, "draggingIndicator")
export type SliderDraggingIndicatorProps = ComponentProps<typeof SliderDraggingIndicator>

export const SliderContext = Slider.Context
export type SliderContextProps = Slider.ContextProps

export type SliderThumbsProps = Omit<SliderThumbProps, "index">

export function SliderThumbs(props: SliderThumbsProps) {
  const slider = useSliderContext()
  return slider.value.map((_, index) => (
    <SliderThumb key={index} index={index} {...props}>
      <SliderHiddenInput />
    </SliderThumb>
  ))
}

export type SliderMarksProps = SliderMarkerGroupProps & {
  /**
   * The values to mark on the track, as numbers or as objects with a `value` and a `label` to show next to the mark.
   */
  marks?: Array<number | { value: number; label: ReactNode }> | undefined
}

export function SliderMarks({ marks, ...props }: SliderMarksProps) {
  if (!marks?.length) return null
  return (
    <SliderMarkerGroup {...props}>
      {marks.map((mark) => {
        const value = typeof mark === "number" ? mark : mark.value
        const label = typeof mark === "number" ? undefined : mark.label
        return (
          <SliderMarker key={value} value={value}>
            <SliderMarkerIndicator />
            {label != null && <SliderMarkerLabel>{label}</SliderMarkerLabel>}
          </SliderMarker>
        )
      })}
    </SliderMarkerGroup>
  )
}
