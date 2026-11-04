<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Box } from "@isbatak/vue-ui/box"
import { Float } from "@isbatak/vue-ui/float"
</script>

<template>
  <Box position="relative" display="inline-flex" w="16" h="16" bg="bg.emphasized" borderRadius="l2">
    <Float placement="bottom-end">
      <Badge size="sm" variant="solid"> New </Badge>
    </Float>
  </Box>
</template>
