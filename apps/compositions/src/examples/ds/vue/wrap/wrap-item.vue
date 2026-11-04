<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Wrap, WrapItem } from "@isbatak/vue-ui/wrap"
</script>

<template>
  <Wrap maxW="xs">
    <WrapItem>
      <Box w="20" h="10" bg="bg.emphasized" borderRadius="l2" />
    </WrapItem>
    <WrapItem>
      <Box w="20" h="16" bg="bg.emphasized" borderRadius="l2" />
    </WrapItem>
    <WrapItem>
      <Box w="20" h="8" bg="bg.emphasized" borderRadius="l2" />
    </WrapItem>
  </Wrap>
</template>
