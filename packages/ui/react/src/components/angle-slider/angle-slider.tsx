"use client"

import { AngleSlider, useAngleSliderContext } from "@ark-ui/react/angle-slider"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { angleSlider } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(angleSlider)

export const AngleSliderRoot = withProvider(AngleSlider.Root, "root")
export type AngleSliderRootProps = ComponentProps<typeof AngleSliderRoot>

export const AngleSliderRootProvider = withProvider(AngleSlider.RootProvider, "root")
export type AngleSliderRootProviderProps = ComponentProps<typeof AngleSliderRootProvider>

export const AngleSliderLabel = withContext(AngleSlider.Label, "label")
export type AngleSliderLabelProps = ComponentProps<typeof AngleSliderLabel>

export const AngleSliderControl = withContext(AngleSlider.Control, "control")
export type AngleSliderControlProps = ComponentProps<typeof AngleSliderControl>

export const AngleSliderThumb = withContext(AngleSlider.Thumb, "thumb")
export type AngleSliderThumbProps = ComponentProps<typeof AngleSliderThumb>

export const AngleSliderMarkerGroup = withContext(AngleSlider.MarkerGroup, "markerGroup")
export type AngleSliderMarkerGroupProps = ComponentProps<typeof AngleSliderMarkerGroup>

export const AngleSliderMarker = withContext(AngleSlider.Marker, "marker")
export type AngleSliderMarkerProps = ComponentProps<typeof AngleSliderMarker>

const StyledAngleSliderValueText = withContext(AngleSlider.ValueText, "valueText")
export type AngleSliderValueTextProps = ComponentProps<typeof StyledAngleSliderValueText>

export function AngleSliderValueText({ children, ...props }: AngleSliderValueTextProps) {
  const angleSlider = useAngleSliderContext()
  return <StyledAngleSliderValueText {...props}>{children ?? `${angleSlider.value}°`}</StyledAngleSliderValueText>
}

export const AngleSliderHiddenInput = AngleSlider.HiddenInput
export type AngleSliderHiddenInputProps = ComponentProps<typeof AngleSliderHiddenInput>

export const AngleSliderContext = AngleSlider.Context
export type AngleSliderContextProps = AngleSlider.ContextProps
