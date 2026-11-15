<script setup lang="ts">
import { VStack } from "@isbatak/vue-ui/stack"
import { Tone, detectTone } from "@isbatak/vue-ui/tone"

const profit = 103.24
const loss = -103.24
</script>

<template>
  <VStack gap="2" alignItems="flex-start">
    <Tone.Root :tone="detectTone(profit)" textStyle="2xl" fontWeight="semibold" gap="1">
      <Tone.Indicator />
      {{ Math.abs(profit).toFixed(2) }}
    </Tone.Root>
    <Tone.Root :tone="detectTone(loss)" textStyle="2xl" fontWeight="semibold" gap="1">
      <Tone.Indicator />
      {{ Math.abs(loss).toFixed(2) }}
    </Tone.Root>
  </VStack>
</template>
