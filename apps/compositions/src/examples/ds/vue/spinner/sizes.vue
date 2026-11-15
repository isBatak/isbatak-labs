<script setup lang="ts">
import { Spinner } from "@isbatak/vue-ui/spinner"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="5">
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
  </HStack>
</template>
