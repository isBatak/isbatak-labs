<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"

const marks = [
  { value: 0, label: "0%" },
  { value: 50, label: "50%" },
  { value: 100, label: "100%" },
]
</script>

<template>
  <Slider.Root :defaultValue="[40]" orientation="vertical" height="48">
    <Slider.Label>Volume</Slider.Label>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
      <Slider.Marks :marks="marks" />
    </Slider.Control>
  </Slider.Root>
</template>
