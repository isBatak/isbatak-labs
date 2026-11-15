import {
  AngleSlider,
  useAngleSliderContext,
  type AngleSliderContextProps as ArkAngleSliderContextProps,
} from "@ark-ui/vue/angle-slider"
import { defineComponent, h, type Component } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
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

export const AngleSliderValueText = defineComponent({
  name: "AngleSliderValueText",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const angleSlider = useAngleSliderContext()
    return () =>
      h(StyledAngleSliderValueText as Component, attrs, slots.default ?? (() => `${angleSlider.value.value}°`))
  },
}) as unknown as typeof StyledAngleSliderValueText

export const AngleSliderHiddenInput = AngleSlider.HiddenInput
export type AngleSliderHiddenInputProps = ComponentProps<typeof AngleSliderHiddenInput>

export const AngleSliderContext = AngleSlider.Context
export type AngleSliderContextProps = ArkAngleSliderContextProps
