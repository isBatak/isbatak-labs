<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack w="full">
    <Box h="10" w="1/2" bg="bg.emphasized" borderRadius="l2" />
    <Box h="10" w="3/4" bg="bg.emphasized" borderRadius="l2" />
    <Box h="10" w="full" bg="bg.emphasized" borderRadius="l2" />
  </VStack>
</template>
