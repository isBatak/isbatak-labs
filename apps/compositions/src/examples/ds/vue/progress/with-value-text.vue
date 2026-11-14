<script setup lang="ts">
import { Progress } from "@isbatak/vue-ui/progress"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Progress.Root :defaultValue="40" w="full" maxW="xs">
    <HStack justify="space-between">
      <Progress.Label>Upload</Progress.Label>
      <Progress.ValueText />
    </HStack>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
</template>
