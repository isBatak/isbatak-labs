<script setup lang="ts">
import { Checkmark } from "@isbatak/vue-ui/checkmark"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Checkmark />
    <Checkmark :checked="true" />
    <Checkmark :indeterminate="true" />
    <Checkmark :checked="true" :disabled="true" />
  </HStack>
</template>
