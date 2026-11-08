import { ColorPicker, parseColor } from "@isbatak/solid-ui/color-picker"
import { HStack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function ColorPickerDemo() {
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
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
