<script setup lang="ts">
import { Progress } from "@isbatak/vue-ui/progress"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="6">
    <Progress.Root size="xs" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
    <Progress.Root size="sm" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
    <Progress.Root size="md" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
    <Progress.Root size="lg" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
    <Progress.Root size="xl" :defaultValue="40" w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  </VStack>
</template>
