<script setup lang="ts">
import { Prose } from "@isbatak/vue-ui/prose"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="8" maxW="xl">
    <Prose size="sm">
      <h3>Small</h3>
      <p>Prose at the small size, for dense UI such as side panels.</p>
    </Prose>
    <Prose size="lg">
      <h3>Large</h3>
      <p>Prose at the large size, for long-form reading.</p>
    </Prose>
  </Stack>
</template>
