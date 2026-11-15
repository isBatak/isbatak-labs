<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { VStack } from "@isbatak/vue-ui/stack"
import { Tone } from "@isbatak/vue-ui/tone"
</script>

<template>
  <VStack gap="2" alignItems="flex-start" textStyle="md" fontWeight="medium">
    <Tone.Root tone="positive" gap="1">
      <Tone.Indicator>
        <Icon name="arrow-up" />
      </Tone.Indicator>
      12 400
    </Tone.Root>
    <Tone.Root tone="negative" gap="1">
      <Tone.Indicator>
        <Icon name="arrow-down" />
      </Tone.Indicator>
      3 150
    </Tone.Root>
  </VStack>
</template>
