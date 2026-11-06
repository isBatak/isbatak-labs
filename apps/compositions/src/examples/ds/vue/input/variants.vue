<script setup lang="ts">
import { Input } from "@isbatak/vue-ui/input"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="3" w="full" maxW="xs">
    <Input variant="outline" placeholder="Outline" />
    <Input variant="subtle" placeholder="Subtle" />
    <Input variant="plain" placeholder="Plain" />
    <Input variant="flushed" placeholder="Flushed" />
  </Stack>
</template>
