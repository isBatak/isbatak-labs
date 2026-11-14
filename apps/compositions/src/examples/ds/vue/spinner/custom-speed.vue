<script setup lang="ts">
import { Spinner } from "@isbatak/vue-ui/spinner"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="5">
    <Spinner size="lg" animationDuration="slow" />
    <Spinner size="lg" />
    <Spinner size="lg" animationDuration="[1s]" />
  </HStack>
</template>
