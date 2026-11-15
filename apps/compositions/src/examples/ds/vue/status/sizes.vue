<script setup lang="ts">
import { Status } from "@isbatak/vue-ui/status"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="3" alignItems="flex-start">
    <Status.Root size="sm" colorPalette="green">
      <Status.Indicator />
      Size sm
    </Status.Root>
    <Status.Root size="md" colorPalette="green">
      <Status.Indicator />
      Size md
    </Status.Root>
    <Status.Root size="lg" colorPalette="green">
      <Status.Indicator />
      Size lg
    </Status.Root>
  </VStack>
</template>
