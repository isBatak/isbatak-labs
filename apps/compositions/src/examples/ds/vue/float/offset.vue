<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Float } from "@isbatak/vue-ui/float"
</script>

<template>
  <Box display="flex" gap="10">
    <Box position="relative" w="20" h="20" bg="bg.emphasized" borderRadius="l2">
      <Float offset="4">
        <Box w="4" h="4" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="20" h="20" bg="bg.emphasized" borderRadius="l2">
      <Float offsetX="-2">
        <Box w="4" h="4" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
    <Box position="relative" w="20" h="20" bg="bg.emphasized" borderRadius="l2">
      <Float offsetY="-2">
        <Box w="4" h="4" bg="bg.inverted" borderRadius="full" />
      </Float>
    </Box>
  </Box>
</template>
