<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Flex } from "@isbatak/vue-ui/flex"
</script>

<template>
  <Box color="fg.muted">
    Text before
    <Flex :inline="true" gap="2" mx="2" verticalAlign="middle">
      <Box w="6" h="6" bg="bg.emphasized" borderRadius="l2" />
      <Box w="6" h="6" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
    text after
  </Box>
</template>
