<script setup lang="ts">
import { Checkbox } from "@isbatak/vue-ui/checkbox"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4" align="flex-start">
    <Checkbox.Root :disabled="true">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Disabled</Checkbox.Label>
    </Checkbox.Root>
    <Checkbox.Root :disabled="true" :defaultChecked="true">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Disabled and checked</Checkbox.Label>
    </Checkbox.Root>
  </Stack>
</template>
