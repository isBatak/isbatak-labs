<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"
</script>

<template>
  <Slider.Root :defaultValue="[40]" :disabled="true" width="full" maxW="xs">
    <Slider.Label>Volume</Slider.Label>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
</template>
