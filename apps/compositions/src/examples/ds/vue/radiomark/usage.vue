<script setup lang="ts">
import { Radiomark } from "@isbatak/vue-ui/radiomark"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Radiomark />
    <Radiomark :checked="true" />
    <Radiomark :checked="true" :disabled="true" />
  </HStack>
</template>
