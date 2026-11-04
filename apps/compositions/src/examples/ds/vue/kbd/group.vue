<script setup lang="ts">
import { Kbd, KbdGroup } from "@isbatak/vue-ui/kbd"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4" align="flex-start">
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
    <KbdGroup size="sm" variant="subtle">
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>Shift</Kbd>
      <span>+</span>
      <Kbd>P</Kbd>
    </KbdGroup>
  </Stack>
</template>
