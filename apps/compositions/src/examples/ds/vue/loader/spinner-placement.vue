<script setup lang="ts">
import { Loader } from "@isbatak/vue-ui/loader"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6" textStyle="sm" fontWeight="medium">
    <HStack gap="2">
      <Loader text="Loading…" spinnerPlacement="start" />
    </HStack>
    <HStack gap="2">
      <Loader text="Loading…" spinnerPlacement="end" />
    </HStack>
  </HStack>
</template>
