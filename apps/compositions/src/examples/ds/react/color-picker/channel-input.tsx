import { Portal } from "@ark-ui/react/portal"
import { ColorPicker, parseColor } from "@isbatak/react-ui/color-picker"
import { HStack } from "styled-system/jsx"

export function ColorPickerChannelInputDemo() {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="2xs">
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack gap="2">
              <ColorPicker.EyeDropper size="xs" />
              <ColorPicker.Sliders />
            </HStack>
            <ColorPicker.FormatSelect />
            <ColorPicker.View format="rgba">
              <HStack gap="2">
                <ColorPicker.ChannelInput channel="red" />
                <ColorPicker.ChannelInput channel="green" />
                <ColorPicker.ChannelInput channel="blue" />
                <ColorPicker.ChannelInput channel="alpha" />
              </HStack>
            </ColorPicker.View>
            <ColorPicker.View format="hsla">
              <HStack gap="2">
                <ColorPicker.ChannelInput channel="hue" />
                <ColorPicker.ChannelInput channel="saturation" />
                <ColorPicker.ChannelInput channel="lightness" />
                <ColorPicker.ChannelInput channel="alpha" />
              </HStack>
            </ColorPicker.View>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
