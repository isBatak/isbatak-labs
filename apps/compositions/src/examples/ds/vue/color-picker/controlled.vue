<script setup lang="ts">
import { ColorPicker, parseColor } from "@isbatak/vue-ui/color-picker"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const color = ref(parseColor("#eb5e41"))
</script>

<template>
  <Stack gap="3" maxW="2xs">
    <ColorPicker.Root v-model="color">
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
    <Text textStyle="sm" color="fg.muted">Value: {{ color.toString("hex") }}</Text>
  </Stack>
</template>
