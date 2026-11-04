<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { GridItem } from "@isbatak/vue-ui/grid"
import { SimpleGrid } from "@isbatak/vue-ui/simple-grid"
</script>

<template>
  <SimpleGrid :columns="3" gap="4" w="full">
    <GridItem :colSpan="2">
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    </GridItem>
    <GridItem :colSpan="1">
      <Box h="20" bg="bg.emphasized" borderRadius="l2" />
    </GridItem>
  </SimpleGrid>
</template>
