<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4" width="full" maxW="xs">
    <Slider.Root :defaultValue="[40]" colorPalette="gray">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
    <Slider.Root :defaultValue="[40]" colorPalette="blue">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
    <Slider.Root :defaultValue="[40]" colorPalette="green">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
    <Slider.Root :defaultValue="[40]" colorPalette="orange">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
    <Slider.Root :defaultValue="[40]" colorPalette="pink">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  </Stack>
</template>
