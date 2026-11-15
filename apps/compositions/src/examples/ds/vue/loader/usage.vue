<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Loader } from "@isbatak/vue-ui/loader"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6">
    <Box position="relative" display="inline-flex">
      <Loader>Hidden while loading</Loader>
    </Box>
    <HStack gap="2">
      <Loader text="Loading…" />
    </HStack>
  </HStack>
</template>
