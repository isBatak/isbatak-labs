<script setup lang="ts">
import { Format } from "@isbatak/vue-ui/format"
import { VStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <VStack gap="2" alignItems="flex-start">
    <Text><Format.Time :value="new Date(2026, 10, 14, 15, 30, 45)" /></Text>
    <Text><Format.Time :value="new Date(2026, 10, 14, 15, 30, 45)" format="24h" /></Text>
    <Text><Format.Time :value="new Date(2026, 10, 14, 15, 30, 45)" :withSeconds="true" /></Text>
  </VStack>
</template>
