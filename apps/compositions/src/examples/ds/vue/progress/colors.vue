<script setup lang="ts">
import { Progress } from "@isbatak/vue-ui/progress"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="6">
    <Progress.Root colorPalette="gray" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
    <Progress.Root colorPalette="red" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
    <Progress.Root colorPalette="green" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
    <Progress.Root colorPalette="blue" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  </VStack>
</template>
