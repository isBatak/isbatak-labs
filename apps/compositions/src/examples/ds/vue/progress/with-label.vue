<script setup lang="ts">
import { Progress } from "@isbatak/vue-ui/progress"
</script>

<template>
  <Progress.Root :defaultValue="40" w="full" maxW="xs">
    <Progress.Label>Uploading</Progress.Label>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
</template>
