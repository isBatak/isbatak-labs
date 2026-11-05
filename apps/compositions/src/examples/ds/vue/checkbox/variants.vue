<script setup lang="ts">
import { Checkbox } from "@isbatak/vue-ui/checkbox"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="6">
    <Checkbox.Root variant="outline" :defaultChecked="true">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Outline</Checkbox.Label>
    </Checkbox.Root>
    <Checkbox.Root variant="subtle" :defaultChecked="true">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Subtle</Checkbox.Label>
    </Checkbox.Root>
    <Checkbox.Root variant="solid" :defaultChecked="true">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Solid</Checkbox.Label>
    </Checkbox.Root>
  </HStack>
</template>
