<script setup lang="ts">
import { Stack } from "@isbatak/vue-ui/stack"
import { Textarea } from "@isbatak/vue-ui/textarea"
</script>

<template>
  <Stack gap="3" w="full" maxW="sm">
    <Textarea size="xs" placeholder="size (xs)" />
    <Textarea size="sm" placeholder="size (sm)" />
    <Textarea size="md" placeholder="size (md)" />
    <Textarea size="lg" placeholder="size (lg)" />
  </Stack>
</template>
