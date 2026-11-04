<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Float } from "@isbatak/vue-ui/float"
</script>

<template>
  <Box position="relative" w="20" h="20" bg="bg.emphasized" borderRadius="l2">
    <Float>
      <Box w="4" h="4" bg="bg.inverted" borderRadius="full" />
    </Float>
  </Box>
</template>
