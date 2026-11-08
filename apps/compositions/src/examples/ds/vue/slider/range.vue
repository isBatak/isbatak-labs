<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"
</script>

<template>
  <Slider.Root :defaultValue="[30, 70]" width="full" maxW="xs">
    <Slider.Label>Price range</Slider.Label>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
</template>
