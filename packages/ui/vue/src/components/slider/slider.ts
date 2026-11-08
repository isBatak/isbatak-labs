import { Slider, useSliderContext } from "@ark-ui/vue/slider"
import { type Component, type PropType, type VNodeChild, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
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

export const SliderThumbs = defineComponent({
  name: "SliderThumbs",
  inheritAttrs: false,
  setup(_, { attrs }) {
    const slider = useSliderContext()
    return () =>
      slider.value.value.map((_, index) =>
        h(SliderThumb as Component, { key: index, index, ...attrs }, () => h(SliderHiddenInput as Component)),
      )
  },
}) as unknown as Component<SliderThumbsProps>

export type SliderMark = number | { value: number; label: VNodeChild }

export type SliderMarksProps = SliderMarkerGroupProps & {
  marks?: SliderMark[] | undefined
}

export const SliderMarks = defineComponent({
  name: "SliderMarks",
  inheritAttrs: false,
  props: {
    marks: { type: Array as PropType<SliderMark[]>, default: undefined },
  },
  setup(props, { attrs }) {
    return () => {
      if (!props.marks?.length) return null
      return h(SliderMarkerGroup as Component, attrs, () =>
        props.marks?.map((mark) => {
          const value = typeof mark === "number" ? mark : mark.value
          const label = typeof mark === "number" ? undefined : mark.label
          return h(SliderMarker as Component, { key: value, value }, () => [
            h(SliderMarkerIndicator as Component),
            label != null ? h(SliderMarkerLabel as Component, null, () => label) : null,
          ])
        }),
      )
    }
  },
}) as unknown as Component<SliderMarksProps>
