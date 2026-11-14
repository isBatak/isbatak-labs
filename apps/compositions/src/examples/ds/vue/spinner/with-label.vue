<script setup lang="ts">
import { Spinner } from "@isbatak/vue-ui/spinner"
import { VStack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <VStack gap="2" colorPalette="blue">
    <Spinner color="colorPalette.solid" />
    <Text color="colorPalette.solid">Loading...</Text>
  </VStack>
</template>
