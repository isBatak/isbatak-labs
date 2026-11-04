<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Circle } from "@isbatak/vue-ui/circle"
import { Square } from "@isbatak/vue-ui/square"
</script>

<template>
  <Box display="flex" gap="4" alignItems="center">
    <Circle size="12" bg="bg.emphasized" color="fg"> A </Circle>
    <Square size="12" bg="bg.emphasized" color="fg" borderRadius="l2"> B </Square>
  </Box>
</template>
