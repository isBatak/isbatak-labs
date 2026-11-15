<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="6" width="full" maxW="xs">
    <Slider.Root :defaultValue="[40]" :disabled="true">
      <Slider.Label>Volume</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
    <Slider.Root :defaultValue="[40]" :disabled="true" variant="field">
      <Slider.Label>Volume</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  </Stack>
</template>
