<script setup lang="ts">
import { ProgressCircle } from "@isbatak/vue-ui/progress-circle"
</script>

<template>
  <ProgressCircle.Root :value="null">
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
</template>
