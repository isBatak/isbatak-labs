<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Slider.Root :defaultValue="[40]" width="full" maxW="xs">
    <HStack justify="space-between">
      <Slider.Label>Volume</Slider.Label>
      <Slider.ValueText />
    </HStack>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
</template>
