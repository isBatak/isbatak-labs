<script setup lang="ts">
import { VStack } from "@isbatak/vue-ui/stack"
import { Tone } from "@isbatak/vue-ui/tone"
</script>

<template>
  <VStack gap="2" alignItems="flex-start" textStyle="md" fontWeight="medium">
    <Tone.Root tone="positive">
      <Tone.Indicator />
      100.001
    </Tone.Root>
    <Tone.Root tone="negative">
      <Tone.Indicator />
      100.001
    </Tone.Root>
    <Tone.Root tone="neutral" color="fg.muted">
      <Tone.Indicator />
      100.001
    </Tone.Root>
  </VStack>
</template>
