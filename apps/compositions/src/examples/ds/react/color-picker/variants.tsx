import { Portal } from "@ark-ui/react/portal"
import { ColorPicker, parseColor } from "@isbatak/react-ui/color-picker"
import { HStack, Stack } from "styled-system/jsx"

export function ColorPickerVariantsDemo() {
  return (
    <Stack gap="6" maxW="2xs">
      <ColorPicker.Root defaultValue={parseColor("#eb5e41")} variant="outline">
        <ColorPicker.HiddenInput />
        <ColorPicker.Label>variant outline</ColorPicker.Label>
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
      <ColorPicker.Root defaultValue={parseColor("#eb5e41")} variant="subtle">
        <ColorPicker.HiddenInput />
        <ColorPicker.Label>variant subtle</ColorPicker.Label>
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
    </Stack>
  )
}
