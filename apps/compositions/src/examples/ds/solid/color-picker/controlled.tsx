import { ColorPicker, parseColor } from "@isbatak/solid-ui/color-picker"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function ColorPickerControlledDemo() {
  const [color, setColor] = createSignal(parseColor("#eb5e41"))

  return (
    <Stack gap="3" maxW="2xs">
      <ColorPicker.Root value={color()} onValueChange={(details) => setColor(details.value)}>
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
      <Text textStyle="sm" color="fg.muted">
        Value: {color().toString("hex")}
      </Text>
    </Stack>
  )
}
