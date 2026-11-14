<script setup lang="ts">
import { Beacon } from "@isbatak/vue-ui/beacon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6">
    <Beacon size="sm" />
    <Beacon size="md" />
    <Beacon size="lg" />
    <Beacon size="xl" />
  </HStack>
</template>
