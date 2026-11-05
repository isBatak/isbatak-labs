<script setup lang="ts">
import { CloseButton } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <CloseButton variant="ghost" />
    <CloseButton variant="outline" />
    <CloseButton variant="subtle" />
  </HStack>
</template>
