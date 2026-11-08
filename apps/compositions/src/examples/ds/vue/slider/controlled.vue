<script setup lang="ts">
import { Slider } from "@isbatak/vue-ui/slider"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const value = ref([40])
</script>

<template>
  <Stack gap="3" width="full" maxW="xs">
    <Slider.Root v-model="value">
      <Slider.Label>Volume</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
    <Text textStyle="sm" color="fg.muted">Value: {{ value[0] }}</Text>
  </Stack>
</template>
