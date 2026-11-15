<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="3" width="full" maxW="xs">
    <Slider.Root variant="field" :defaultValue="[0.45]" :min="0" :max="1" :step="0.05">
      <Slider.Label>Opacity</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
        <Slider.Marks :marks="[0.25, 0.5, 0.75]" />
      </Slider.Control>
    </Slider.Root>
    <Slider.Root variant="field" :defaultValue="[50]" :min="0" :max="100">
      <Slider.Label>Blur</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
    <Slider.Root variant="field" :defaultValue="[8]" :min="0" :max="10" :step="0.5">
      <Slider.Label>Saturation</Slider.Label>
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
