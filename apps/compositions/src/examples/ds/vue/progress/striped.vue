<script setup lang="ts">
import { Progress } from "@isbatak/vue-ui/progress"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="6">
    <Progress.Root :striped="true" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
    <Progress.Root :striped="true" :animated="true" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  </VStack>
</template>
