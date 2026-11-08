import { Portal } from "@ark-ui/react/portal"
import { ColorPicker, parseColor } from "@isbatak/react-ui/color-picker"
import { useState } from "react"
import { HStack, Stack, styled } from "styled-system/jsx"

export function ColorPickerControlledDemo() {
  const [color, setColor] = useState(parseColor("#eb5e41"))

  return (
    <Stack gap="3" maxW="2xs">
      <ColorPicker.Root value={color} onValueChange={(details) => setColor(details.value)}>
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
      <styled.p textStyle="sm" color="fg.muted">
        Value: {color.toString("hex")}
      </styled.p>
    </Stack>
  )
}
