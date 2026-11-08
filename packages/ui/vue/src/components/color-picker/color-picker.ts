import { ColorPicker } from "@ark-ui/vue/color-picker"
import type { HTMLArkProps } from "@ark-ui/vue/factory"
import { type Component, defineComponent, type FunctionalComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { colorPicker } from "@isbatak/panda-ds/recipes"

import { IconButton, type IconButtonProps } from "../button"
import { Icon } from "../icon"
import { Stack, type StackProps } from "../stack"

const { withProvider, withContext } = createSlotRecipeContext(colorPicker)

export const ColorPickerRoot = withProvider(ColorPicker.Root, "root")
export type ColorPickerRootProps = ComponentProps<typeof ColorPickerRoot>

export const ColorPickerRootProvider = withProvider(ColorPicker.RootProvider, "root")
export type ColorPickerRootProviderProps = ComponentProps<typeof ColorPickerRootProvider>

export const ColorPickerLabel = withContext(ColorPicker.Label, "label")
export type ColorPickerLabelProps = ComponentProps<typeof ColorPickerLabel>

export const ColorPickerControl = withContext(ColorPicker.Control, "control")
export type ColorPickerControlProps = ComponentProps<typeof ColorPickerControl>

export const ColorPickerPositioner = withContext(ColorPicker.Positioner, "positioner")
export type ColorPickerPositionerProps = ComponentProps<typeof ColorPickerPositioner>

export const ColorPickerContent = withContext(ColorPicker.Content, "content")
export type ColorPickerContentProps = ComponentProps<typeof ColorPickerContent>

export const ColorPickerAreaBackground = withContext(ColorPicker.AreaBackground, "areaBackground")
export type ColorPickerAreaBackgroundProps = ComponentProps<typeof ColorPickerAreaBackground>

export const ColorPickerAreaThumb = withContext(ColorPicker.AreaThumb, "areaThumb")
export type ColorPickerAreaThumbProps = ComponentProps<typeof ColorPickerAreaThumb>

export const ColorPickerChannelSliderLabel = withContext(ColorPicker.ChannelSliderLabel, "channelSliderLabel")
export type ColorPickerChannelSliderLabelProps = ComponentProps<typeof ColorPickerChannelSliderLabel>

export const ColorPickerChannelSliderTrack = withContext(ColorPicker.ChannelSliderTrack, "channelSliderTrack")
export type ColorPickerChannelSliderTrackProps = ComponentProps<typeof ColorPickerChannelSliderTrack>

export const ColorPickerChannelSliderThumb = withContext(ColorPicker.ChannelSliderThumb, "channelSliderThumb")
export type ColorPickerChannelSliderThumbProps = ComponentProps<typeof ColorPickerChannelSliderThumb>

export const ColorPickerChannelSliderValueText = withContext(
  ColorPicker.ChannelSliderValueText,
  "channelSliderValueText",
)
export type ColorPickerChannelSliderValueTextProps = ComponentProps<typeof ColorPickerChannelSliderValueText>

export const ColorPickerChannelInput = withContext(
  ColorPicker.ChannelInput as unknown as FunctionalComponent<HTMLArkProps<"input"> & ColorPicker.ChannelInputBaseProps>,
  "channelInput",
)
export type ColorPickerChannelInputProps = ComponentProps<typeof ColorPickerChannelInput>

export const ColorPickerTransparencyGrid = withContext(ColorPicker.TransparencyGrid, "transparencyGrid")
export type ColorPickerTransparencyGridProps = ComponentProps<typeof ColorPickerTransparencyGrid>

export const ColorPickerSwatchGroup = withContext(ColorPicker.SwatchGroup, "swatchGroup")
export type ColorPickerSwatchGroupProps = ComponentProps<typeof ColorPickerSwatchGroup>

export const ColorPickerSwatchTrigger = withContext(ColorPicker.SwatchTrigger, "swatchTrigger")
export type ColorPickerSwatchTriggerProps = ComponentProps<typeof ColorPickerSwatchTrigger>

export const ColorPickerSwatch = withContext(ColorPicker.Swatch, "swatch")
export type ColorPickerSwatchProps = ComponentProps<typeof ColorPickerSwatch>

export const ColorPickerValueSwatch = withContext(ColorPicker.ValueSwatch, "swatch")
export type ColorPickerValueSwatchProps = ComponentProps<typeof ColorPickerValueSwatch>

export const ColorPickerValueText = withContext(ColorPicker.ValueText, "valueText")
export type ColorPickerValueTextProps = ComponentProps<typeof ColorPickerValueText>

export const ColorPickerEyeDropperTrigger = withContext(ColorPicker.EyeDropperTrigger, "eyeDropperTrigger")
export type ColorPickerEyeDropperTriggerProps = ComponentProps<typeof ColorPickerEyeDropperTrigger>

export const ColorPickerFormatSelect = withContext(ColorPicker.FormatSelect, "formatSelect")
export type ColorPickerFormatSelectProps = ComponentProps<typeof ColorPickerFormatSelect>

export const ColorPickerFormatTrigger = withContext(ColorPicker.FormatTrigger, "formatTrigger")
export type ColorPickerFormatTriggerProps = ComponentProps<typeof ColorPickerFormatTrigger>

export const ColorPickerView = withContext(ColorPicker.View, "view")
export type ColorPickerViewProps = ComponentProps<typeof ColorPickerView>

const withDefault = <T extends Component>(
  styled: T,
  name: string,
  fallback: () => ReturnType<typeof h> | ReturnType<typeof h>[],
) =>
  defineComponent({
    name,
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      return () => h(styled as Component, attrs, () => slots.default?.() ?? fallback())
    },
  }) as unknown as T

const StyledColorPickerTrigger = withContext(ColorPicker.Trigger, "trigger")
export type ColorPickerTriggerProps = ComponentProps<typeof StyledColorPickerTrigger>
export const ColorPickerTrigger = withDefault(StyledColorPickerTrigger, "ColorPickerTrigger", () =>
  h(ColorPickerValueSwatch as Component),
)

const StyledColorPickerArea = withContext(ColorPicker.Area, "area")
export type ColorPickerAreaProps = ComponentProps<typeof StyledColorPickerArea>
export const ColorPickerArea = withDefault(StyledColorPickerArea, "ColorPickerArea", () => [
  h(ColorPickerAreaBackground as Component),
  h(ColorPickerAreaThumb as Component),
])

const StyledColorPickerChannelSlider = withContext(ColorPicker.ChannelSlider, "channelSlider")
export type ColorPickerChannelSliderProps = ComponentProps<typeof StyledColorPickerChannelSlider>
export const ColorPickerChannelSlider = withDefault(StyledColorPickerChannelSlider, "ColorPickerChannelSlider", () => [
  h(ColorPickerTransparencyGrid as Component, { size: "0.6rem" }),
  h(ColorPickerChannelSliderTrack as Component),
  h(ColorPickerChannelSliderThumb as Component),
])

const StyledColorPickerSwatchIndicator = withContext(ColorPicker.SwatchIndicator, "swatchIndicator")
export type ColorPickerSwatchIndicatorProps = ComponentProps<typeof StyledColorPickerSwatchIndicator>
export const ColorPickerSwatchIndicator = withDefault(
  StyledColorPickerSwatchIndicator,
  "ColorPickerSwatchIndicator",
  () => h(Icon, { name: "check" }),
)

export type ColorPickerSlidersProps = StackProps

export const ColorPickerSliders = defineComponent({
  name: "ColorPickerSliders",
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () =>
      h(Stack as Component, { gap: "1", flex: "1", ...attrs }, () => [
        h(ColorPickerChannelSlider as Component, { channel: "hue" }),
        h(ColorPickerChannelSlider as Component, { channel: "alpha" }),
      ])
  },
}) as unknown as Component<ColorPickerSlidersProps>

export type ColorPickerInputProps = Omit<ColorPickerChannelInputProps, "channel">

export const ColorPickerInput = defineComponent({
  name: "ColorPickerInput",
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () => h(ColorPickerChannelInput as Component, { channel: "hex", ...attrs })
  },
}) as unknown as Component<ColorPickerInputProps>

export type ColorPickerEyeDropperProps = IconButtonProps

export const ColorPickerEyeDropper = defineComponent({
  name: "ColorPickerEyeDropper",
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () =>
      h(ColorPickerEyeDropperTrigger as Component, { asChild: true }, () =>
        h(IconButton as Component, { variant: "outline", "aria-label": "Pick a color from the screen", ...attrs }, () =>
          h(Icon, { name: "color-picker" }),
        ),
      )
  },
}) as unknown as Component<ColorPickerEyeDropperProps>

export const ColorPickerHiddenInput = ColorPicker.HiddenInput
export type ColorPickerHiddenInputProps = ComponentProps<typeof ColorPickerHiddenInput>

export const ColorPickerContext = ColorPicker.Context
export type ColorPickerContextProps = ComponentProps<typeof ColorPickerContext>
