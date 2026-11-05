<script setup lang="ts">
import { CloseButton } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <CloseButton size="xs" variant="outline" />
    <CloseButton size="sm" variant="outline" />
    <CloseButton size="md" variant="outline" />
    <CloseButton size="lg" variant="outline" />
  </HStack>
</template>
