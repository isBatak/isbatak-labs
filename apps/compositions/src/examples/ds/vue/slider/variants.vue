<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="6" width="full" maxW="xs">
    <Slider.Root :defaultValue="[40]" variant="capsule">
      <Slider.Label>capsule</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
    <Slider.Root :defaultValue="[40]" variant="field">
      <Slider.Label>field</Slider.Label>
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
