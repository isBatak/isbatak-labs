<script setup lang="ts">
import { Beacon } from "@isbatak/vue-ui/beacon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6">
    <Beacon size="lg" colorPalette="gray" />
    <Beacon size="lg" colorPalette="blue" />
    <Beacon size="lg" colorPalette="green" />
    <Beacon size="lg" colorPalette="yellow" />
    <Beacon size="lg" colorPalette="red" />
  </HStack>
</template>
