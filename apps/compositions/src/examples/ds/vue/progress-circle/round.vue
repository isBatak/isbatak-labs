<script setup lang="ts">
import { ProgressCircle } from "@isbatak/vue-ui/progress-circle"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6">
    <ProgressCircle.Root :defaultValue="65">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
    <ProgressCircle.Root :defaultValue="65" round>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  </HStack>
</template>
