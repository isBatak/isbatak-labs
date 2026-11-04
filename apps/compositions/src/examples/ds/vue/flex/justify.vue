<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Flex } from "@isbatak/vue-ui/flex"
</script>

<template>
  <Flex direction="column" gap="6" w="full">
    <Flex gap="4" justify="flex-start">
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
    <Flex gap="4" justify="center">
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
    <Flex gap="4" justify="flex-end">
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
    <Flex gap="4" justify="space-between">
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
      <Box w="12" h="10" bg="bg.emphasized" borderRadius="l2" />
    </Flex>
  </Flex>
</template>
