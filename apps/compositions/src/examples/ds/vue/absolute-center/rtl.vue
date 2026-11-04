<script setup lang="ts">
import { AbsoluteCenter } from "@isbatak/vue-ui/absolute-center"
import { Box } from "@isbatak/vue-ui/box"
</script>

<template>
  <Box dir="rtl" position="relative" h="24" w="full" maxW="sm" bg="bg.muted" borderRadius="l2">
    <AbsoluteCenter axis="horizontal" bg="bg.emphasized" px="4" py="2" borderRadius="l1"> مرحبا </AbsoluteCenter>
  </Box>
</template>
