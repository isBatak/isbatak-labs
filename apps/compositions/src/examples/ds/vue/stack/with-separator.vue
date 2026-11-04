<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack :separator="true" gap="4" w="full">
    <Box h="10" bg="bg.emphasized" borderRadius="l2" />
    <Box h="10" bg="bg.emphasized" borderRadius="l2" />
    <Box h="10" bg="bg.emphasized" borderRadius="l2" />
  </Stack>
</template>
