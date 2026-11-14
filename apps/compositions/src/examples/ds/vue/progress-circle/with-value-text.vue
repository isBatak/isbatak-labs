<script setup lang="ts">
import { ProgressCircle } from "@isbatak/vue-ui/progress-circle"
import { AbsoluteCenter } from "@isbatak/vue-ui/absolute-center"
</script>

<template>
  <ProgressCircle.Root size="xl" :defaultValue="65">
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
    <AbsoluteCenter>
      <ProgressCircle.ValueText />
    </AbsoluteCenter>
  </ProgressCircle.Root>
</template>
