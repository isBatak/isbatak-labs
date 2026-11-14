<script setup lang="ts">
import { Progress } from "@isbatak/vue-ui/progress"
</script>

<template>
  <Progress.Root :defaultValue="40" w="full" maxW="xs">
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
</template>
