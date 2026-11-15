<script setup lang="ts">
import { Spinner } from "@isbatak/vue-ui/spinner"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="5">
    <Spinner size="lg" colorPalette="gray" color="colorPalette.solid" />
    <Spinner size="lg" colorPalette="blue" color="colorPalette.solid" />
    <Spinner size="lg" colorPalette="green" color="colorPalette.solid" />
    <Spinner size="lg" colorPalette="yellow" color="colorPalette.solid" />
    <Spinner size="lg" colorPalette="red" color="colorPalette.solid" />
  </HStack>
</template>
