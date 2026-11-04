<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Container } from "@isbatak/vue-ui/container"
</script>

<template>
  <Container :centerContent="true" bg="bg.muted" py="6" borderRadius="l2" gap="2">
    <Box bg="bg.emphasized" px="4" py="2" borderRadius="l1"> Centered </Box>
    <Box bg="bg.emphasized" px="4" py="2" borderRadius="l1"> Children </Box>
  </Container>
</template>
