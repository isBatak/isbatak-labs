<script setup lang="ts">
import { Radiomark } from "@isbatak/vue-ui/radiomark"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Radiomark :checked="true" variant="solid" />
    <Radiomark :checked="true" variant="outline" />
    <Radiomark :checked="true" variant="subtle" />
    <Radiomark :checked="true" variant="inverted" />
  </HStack>
</template>
