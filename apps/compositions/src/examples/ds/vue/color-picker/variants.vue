<script setup lang="ts">
import { ColorPicker, parseColor } from "@isbatak/vue-ui/color-picker"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="6" maxW="2xs">
    <ColorPicker.Root :defaultValue="parseColor('#eb5e41')" variant="outline">
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>variant outline</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Teleport to="body">
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack gap="2">
              <ColorPicker.EyeDropper size="xs" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Teleport>
    </ColorPicker.Root>
    <ColorPicker.Root :defaultValue="parseColor('#eb5e41')" variant="subtle">
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>variant subtle</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Teleport to="body">
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack gap="2">
              <ColorPicker.EyeDropper size="xs" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Teleport>
    </ColorPicker.Root>
  </Stack>
</template>
