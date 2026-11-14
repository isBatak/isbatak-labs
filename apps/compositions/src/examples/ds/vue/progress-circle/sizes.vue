<script setup lang="ts">
import { ProgressCircle } from "@isbatak/vue-ui/progress-circle"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6">
    <ProgressCircle.Root size="xs" :defaultValue="65">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
    <ProgressCircle.Root size="sm" :defaultValue="65">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
    <ProgressCircle.Root size="md" :defaultValue="65">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
    <ProgressCircle.Root size="lg" :defaultValue="65">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
    <ProgressCircle.Root size="xl" :defaultValue="65">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
    <ProgressCircle.Root size="2xl" :defaultValue="65">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  </HStack>
</template>
