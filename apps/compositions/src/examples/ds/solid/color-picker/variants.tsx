import { ColorPicker, parseColor } from "@isbatak/solid-ui/color-picker"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

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
