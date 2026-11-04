<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { SimpleGrid } from "@isbatak/vue-ui/simple-grid"
</script>

<template>
  <SimpleGrid :columns="2" gap="4" w="full">
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
  </SimpleGrid>
</template>
