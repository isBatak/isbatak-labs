<script setup lang="ts">
import { VStack } from "@isbatak/vue-ui/stack"
import { Tone } from "@isbatak/vue-ui/tone"
</script>

<template>
  <VStack gap="2" alignItems="flex-start" textStyle="md" fontWeight="medium">
    <Tone.Root tone="positive" :plain="true">
      <Tone.Indicator color="fg.success" />
      +2.4%
    </Tone.Root>
    <Tone.Root tone="negative" :plain="true">
      <Tone.Indicator color="fg.error" />
      -1.8%
    </Tone.Root>
  </VStack>
</template>
