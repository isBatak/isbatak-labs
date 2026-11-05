<script setup lang="ts">
import { HStack } from "@isbatak/vue-ui/stack"
import { Switch } from "@isbatak/vue-ui/switch"
</script>

<template>
  <HStack gap="6">
    <Switch.Root variant="solid" :defaultChecked="true">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Solid</Switch.Label>
    </Switch.Root>
    <Switch.Root variant="raised" :defaultChecked="true">
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Raised</Switch.Label>
    </Switch.Root>
  </HStack>
</template>
