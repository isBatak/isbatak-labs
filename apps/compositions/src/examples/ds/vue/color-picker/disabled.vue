<script setup lang="ts">
import { ColorPicker, parseColor } from "@isbatak/vue-ui/color-picker"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <ColorPicker.Root :defaultValue="parseColor('#eb5e41')" :disabled="true" maxW="2xs">
    <ColorPicker.HiddenInput />
    <ColorPicker.Label>Color</ColorPicker.Label>
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
</template>
