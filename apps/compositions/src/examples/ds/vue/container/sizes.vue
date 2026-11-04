<script setup lang="ts">
import { Container } from "@isbatak/vue-ui/container"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack w="full">
    <Container maxW="md" bg="bg.muted" py="3" borderRadius="l2"> md </Container>
    <Container maxW="lg" bg="bg.muted" py="3" borderRadius="l2"> lg </Container>
    <Container maxW="xl" bg="bg.muted" py="3" borderRadius="l2"> xl </Container>
  </Stack>
</template>
