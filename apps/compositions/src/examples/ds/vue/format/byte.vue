<script setup lang="ts">
import { Format } from "@isbatak/vue-ui/format"
import { VStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <VStack gap="2" alignItems="flex-start">
    <Text><Format.Byte :value="1450.45" /></Text>
    <Text><Format.Byte :value="1450.45" unitSystem="binary" /></Text>
    <Text><Format.Byte :value="1450.45" unit="bit" /></Text>
    <Text><Format.Byte :value="1450.45" unitDisplay="long" /></Text>
  </VStack>
</template>
