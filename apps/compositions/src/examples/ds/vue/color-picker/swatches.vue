<script setup lang="ts">
import { ColorPicker, parseColor } from "@isbatak/vue-ui/color-picker"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <ColorPicker.Root :defaultValue="parseColor('#3b82f6')" maxW="2xs">
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
          <ColorPicker.SwatchGroup>
            <ColorPicker.SwatchTrigger value="#ef4444">
              <ColorPicker.Swatch value="#ef4444">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="#f97316">
              <ColorPicker.Swatch value="#f97316">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="#eab308">
              <ColorPicker.Swatch value="#eab308">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="#22c55e">
              <ColorPicker.Swatch value="#22c55e">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="#06b6d4">
              <ColorPicker.Swatch value="#06b6d4">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="#3b82f6">
              <ColorPicker.Swatch value="#3b82f6">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="#a855f7">
              <ColorPicker.Swatch value="#a855f7">
                <ColorPicker.SwatchIndicator />
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </Teleport>
  </ColorPicker.Root>
</template>
