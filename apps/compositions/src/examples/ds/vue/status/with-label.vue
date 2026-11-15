<script setup lang="ts">
import { Status } from "@isbatak/vue-ui/status"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="3" alignItems="flex-start">
    <Status.Root colorPalette="green">
      <Status.Indicator />
      Online
    </Status.Root>
    <Status.Root colorPalette="red">
      <Status.Indicator />
      Offline
    </Status.Root>
    <Status.Root colorPalette="yellow">
      <Status.Indicator />
      Away
    </Status.Root>
    <Status.Root colorPalette="blue">
      <Status.Indicator />
      In a meeting
    </Status.Root>
  </VStack>
</template>
