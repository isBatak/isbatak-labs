<script setup lang="ts">
import { ProgressCircle } from "@isbatak/vue-ui/progress-circle"
</script>

<template>
  <ProgressCircle.Root :defaultValue="65" gap="2" alignItems="center">
    <ProgressCircle.Label>Upload</ProgressCircle.Label>
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
</template>
