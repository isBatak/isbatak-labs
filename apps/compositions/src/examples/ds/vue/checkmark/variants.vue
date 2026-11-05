<script setup lang="ts">
import { Checkmark } from "@isbatak/vue-ui/checkmark"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Checkmark :checked="true" variant="solid" />
    <Checkmark :checked="true" variant="outline" />
    <Checkmark :checked="true" variant="subtle" />
    <Checkmark :checked="true" variant="plain" />
    <Checkmark :checked="true" variant="inverted" />
  </HStack>
</template>
