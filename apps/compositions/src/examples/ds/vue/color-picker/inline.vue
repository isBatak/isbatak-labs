<script setup lang="ts">
import { ColorPicker, parseColor } from "@isbatak/vue-ui/color-picker"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <ColorPicker.Root :open="true" :defaultValue="parseColor('#eb5e41')" maxW="2xs">
    <ColorPicker.HiddenInput />
    <ColorPicker.Label>Color</ColorPicker.Label>
    <ColorPicker.Content shadow="none" p="0">
      <ColorPicker.Area />
      <HStack gap="2">
        <ColorPicker.EyeDropper size="xs" />
        <ColorPicker.Sliders />
        <ColorPicker.ValueSwatch />
      </HStack>
    </ColorPicker.Content>
  </ColorPicker.Root>
</template>
