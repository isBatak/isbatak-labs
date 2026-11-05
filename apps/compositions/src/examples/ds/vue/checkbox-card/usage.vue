<script setup lang="ts">
import { CheckboxCard } from "@isbatak/vue-ui/checkbox-card"
</script>

<template>
  <CheckboxCard.Root maxW="xs">
    <CheckboxCard.HiddenInput />
    <CheckboxCard.Control>
      <CheckboxCard.Content>
        <CheckboxCard.Label>Next.js</CheckboxCard.Label>
        <CheckboxCard.Description>Best for apps</CheckboxCard.Description>
      </CheckboxCard.Content>
      <CheckboxCard.Indicator />
    </CheckboxCard.Control>
  </CheckboxCard.Root>
</template>
