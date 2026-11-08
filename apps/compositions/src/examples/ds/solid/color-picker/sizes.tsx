import { ColorPicker, parseColor } from "@isbatak/solid-ui/color-picker"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Portal } from "solid-js/web"

export function ColorPickerSizesDemo() {
  return (
    <Stack gap="6" maxW="2xs">
      <ColorPicker.Root defaultValue={parseColor("#eb5e41")} size="xs">
        <ColorPicker.HiddenInput />
        <ColorPicker.Label>size xs</ColorPicker.Label>
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
      <ColorPicker.Root defaultValue={parseColor("#eb5e41")} size="sm">
        <ColorPicker.HiddenInput />
        <ColorPicker.Label>size sm</ColorPicker.Label>
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
      <ColorPicker.Root defaultValue={parseColor("#eb5e41")} size="md">
        <ColorPicker.HiddenInput />
        <ColorPicker.Label>size md</ColorPicker.Label>
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
      <ColorPicker.Root defaultValue={parseColor("#eb5e41")} size="lg">
        <ColorPicker.HiddenInput />
        <ColorPicker.Label>size lg</ColorPicker.Label>
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
