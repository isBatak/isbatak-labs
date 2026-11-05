<script setup lang="ts">
import { Stack } from "@isbatak/vue-ui/stack"
import { Switch } from "@isbatak/vue-ui/switch"
</script>

<template>
  <Stack gap="4" align="flex-start">
    <Switch.Root :disabled="true">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Disabled</Switch.Label>
    </Switch.Root>
    <Switch.Root :disabled="true" :defaultChecked="true">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Disabled and on</Switch.Label>
    </Switch.Root>
  </Stack>
</template>
