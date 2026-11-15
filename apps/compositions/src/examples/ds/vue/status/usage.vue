<script setup lang="ts">
import { Status } from "@isbatak/vue-ui/status"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6">
    <Status.Root colorPalette="green">
      <Status.Indicator />
    </Status.Root>
    <Status.Root colorPalette="red">
      <Status.Indicator />
    </Status.Root>
    <Status.Root colorPalette="yellow">
      <Status.Indicator />
    </Status.Root>
    <Status.Root colorPalette="blue">
      <Status.Indicator />
    </Status.Root>
  </HStack>
</template>
