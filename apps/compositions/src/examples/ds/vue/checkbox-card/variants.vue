<script setup lang="ts">
import { CheckboxCard } from "@isbatak/vue-ui/checkbox-card"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="3" maxW="xs">
    <CheckboxCard.Root variant="surface" :defaultChecked="true">
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Label>Surface</CheckboxCard.Label>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
    <CheckboxCard.Root variant="subtle" :defaultChecked="true">
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Label>Subtle</CheckboxCard.Label>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
    <CheckboxCard.Root variant="outline" :defaultChecked="true">
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Label>Outline</CheckboxCard.Label>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  </Stack>
</template>
