<script setup lang="ts">
import { Checkbox } from "@isbatak/vue-ui/checkbox"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4" align="flex-start">
    <Checkbox.Root size="sm">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Checkbox (sm)</Checkbox.Label>
    </Checkbox.Root>
    <Checkbox.Root size="md">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Checkbox (md)</Checkbox.Label>
    </Checkbox.Root>
    <Checkbox.Root size="lg">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Checkbox (lg)</Checkbox.Label>
    </Checkbox.Root>
  </Stack>
</template>
