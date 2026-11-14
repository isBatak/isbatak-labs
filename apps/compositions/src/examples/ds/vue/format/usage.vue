<script setup lang="ts">
import { Format } from "@isbatak/vue-ui/format"
import { VStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <VStack gap="2" alignItems="flex-start">
    <Text><Format.Number :value="1234567.891" /></Text>
    <Text><Format.Number :value="1234567" notation="compact" compactDisplay="short" /></Text>
  </VStack>
</template>
