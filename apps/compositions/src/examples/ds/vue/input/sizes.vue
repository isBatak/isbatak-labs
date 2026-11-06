<script setup lang="ts">
import { Input } from "@isbatak/vue-ui/input"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="3" w="full" maxW="xs">
    <Input size="xs" placeholder="size (xs)" />
    <Input size="sm" placeholder="size (sm)" />
    <Input size="md" placeholder="size (md)" />
    <Input size="lg" placeholder="size (lg)" />
  </Stack>
</template>
