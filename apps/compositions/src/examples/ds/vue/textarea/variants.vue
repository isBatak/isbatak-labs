<script setup lang="ts">
import { Stack } from "@isbatak/vue-ui/stack"
import { Textarea } from "@isbatak/vue-ui/textarea"
</script>

<template>
  <Stack gap="3" w="full" maxW="sm">
    <Textarea variant="outline" placeholder="Outline" />
    <Textarea variant="subtle" placeholder="Subtle" />
    <Textarea variant="plain" placeholder="Plain" />
    <Textarea variant="flushed" placeholder="Flushed" />
  </Stack>
</template>
