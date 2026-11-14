<script setup lang="ts">
import { Spinner } from "@isbatak/vue-ui/spinner"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="5">
    <Spinner size="lg" :showTrack="true" colorPalette="blue" color="colorPalette.solid" />
    <Spinner size="lg" :showTrack="true" colorPalette="green" color="colorPalette.solid" />
    <Spinner size="lg" :showTrack="true" colorPalette="red" color="colorPalette.solid" />
  </HStack>
</template>
