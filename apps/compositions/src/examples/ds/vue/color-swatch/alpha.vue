<script setup lang="ts">
import { ColorSwatch } from "@isbatak/vue-ui/color-swatch"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="2">
    <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" />
    <ColorSwatch value="oklch(0.62 0.19 260 / 0.6)" size="xl" />
    <ColorSwatch value="oklch(0.62 0.19 260 / 0.3)" size="xl" />
    <ColorSwatch value="transparent" size="xl" />
  </HStack>
</template>
