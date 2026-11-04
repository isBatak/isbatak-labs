<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Wrap } from "@isbatak/vue-ui/wrap"
</script>

<template>
  <Wrap :gap="{ base: '2', md: '6' }" maxW="sm">
    <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
    <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
    <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
    <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
  </Wrap>
</template>
