import { Portal } from "@ark-ui/react/portal"
import { ColorPicker, parseColor } from "@isbatak/react-ui/color-picker"
import { HStack } from "styled-system/jsx"

export function ColorPickerDisabledDemo() {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} disabled maxW="2xs">
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
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
