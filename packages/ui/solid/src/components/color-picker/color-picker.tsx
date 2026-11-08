import { ColorPicker } from "@ark-ui/solid/color-picker"
import { type ComponentProps, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export const ColorPickerChannelInput = withContext(ColorPicker.ChannelInput, "channelInput")
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

const StyledColorPickerTrigger = withContext(ColorPicker.Trigger, "trigger")
export type ColorPickerTriggerProps = ComponentProps<typeof StyledColorPickerTrigger>

export function ColorPickerTrigger(props: ColorPickerTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledColorPickerTrigger {...rest}>{local.children ?? <ColorPickerValueSwatch />}</StyledColorPickerTrigger>
}

const StyledColorPickerArea = withContext(ColorPicker.Area, "area")
export type ColorPickerAreaProps = ComponentProps<typeof StyledColorPickerArea>

export function ColorPickerArea(props: ColorPickerAreaProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledColorPickerArea {...rest}>
      {local.children ?? (
        <>
          <ColorPickerAreaBackground />
          <ColorPickerAreaThumb />
        </>
      )}
    </StyledColorPickerArea>
  )
}

const StyledColorPickerChannelSlider = withContext(ColorPicker.ChannelSlider, "channelSlider")
export type ColorPickerChannelSliderProps = ComponentProps<typeof StyledColorPickerChannelSlider>

export function ColorPickerChannelSlider(props: ColorPickerChannelSliderProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledColorPickerChannelSlider {...rest}>
      {local.children ?? (
        <>
          <ColorPickerTransparencyGrid size="0.6rem" />
          <ColorPickerChannelSliderTrack />
          <ColorPickerChannelSliderThumb />
        </>
      )}
    </StyledColorPickerChannelSlider>
  )
}

const StyledColorPickerSwatchIndicator = withContext(ColorPicker.SwatchIndicator, "swatchIndicator")
export type ColorPickerSwatchIndicatorProps = ComponentProps<typeof StyledColorPickerSwatchIndicator>

export function ColorPickerSwatchIndicator(props: ColorPickerSwatchIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledColorPickerSwatchIndicator {...rest}>
      {local.children ?? <Icon name="check" />}
    </StyledColorPickerSwatchIndicator>
  )
}

export type ColorPickerSlidersProps = StackProps

export function ColorPickerSliders(props: ColorPickerSlidersProps) {
  return (
    <Stack gap="1" flex="1" {...props}>
      <ColorPickerChannelSlider channel="hue" />
      <ColorPickerChannelSlider channel="alpha" />
    </Stack>
  )
}

export type ColorPickerInputProps = Omit<ColorPickerChannelInputProps, "channel">

export function ColorPickerInput(props: ColorPickerInputProps) {
  return <ColorPickerChannelInput channel="hex" {...props} />
}

export type ColorPickerEyeDropperProps = Omit<IconButtonProps, "children">

export function ColorPickerEyeDropper(props: ColorPickerEyeDropperProps) {
  return (
    <ColorPickerEyeDropperTrigger
      asChild={(triggerProps) => (
        <IconButton variant="outline" aria-label="Pick a color from the screen" {...triggerProps()} {...props}>
          <Icon name="color-picker" />
        </IconButton>
      )}
    />
  )
}

export const ColorPickerHiddenInput = ColorPicker.HiddenInput
export type ColorPickerHiddenInputProps = ComponentProps<typeof ColorPickerHiddenInput>

export const ColorPickerContext = ColorPicker.Context
export type ColorPickerContextProps = ComponentProps<typeof ColorPickerContext>
