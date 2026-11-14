<script setup lang="ts">
import { Format } from "@isbatak/vue-ui/format"
import { VStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <VStack gap="2" alignItems="flex-start">
    <Text><Format.RelativeTime :value="new Date(Date.now() - 3 * 60 * 60 * 1000)" /></Text>
    <Text><Format.RelativeTime :value="new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)" /></Text>
    <Text><Format.RelativeTime :value="new Date(Date.now() - 30 * 1000)" numeric="auto" /></Text>
  </VStack>
</template>
