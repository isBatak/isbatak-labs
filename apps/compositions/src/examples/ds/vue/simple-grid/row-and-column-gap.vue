<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { SimpleGrid } from "@isbatak/vue-ui/simple-grid"
</script>

<template>
  <SimpleGrid :columns="2" columnGap="2" rowGap="6" w="full">
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    <Box h="20" bg="bg.emphasized" borderRadius="l2" />
  </SimpleGrid>
</template>
