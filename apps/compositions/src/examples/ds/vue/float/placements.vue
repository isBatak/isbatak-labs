<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Float } from "@isbatak/vue-ui/float"
import { SimpleGrid } from "@isbatak/vue-ui/simple-grid"
</script>

<template>
  <SimpleGrid :columns="3" gap="10" p="4">
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="top-start">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="top-center">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="top-end">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="middle-start">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="middle-center">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="middle-end">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="bottom-start">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="bottom-center">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="16" h="16" bg="bg.muted" borderRadius="l2">
      <Float placement="bottom-end">
        <Box w="3" h="3" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
  </SimpleGrid>
</template>
