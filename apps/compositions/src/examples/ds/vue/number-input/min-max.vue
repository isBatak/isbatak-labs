<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { NumberInput } from "@isbatak/vue-ui/number-input"
</script>

<template>
  <NumberInput.Root defaultValue="5" :min="0" :max="10" maxW="xs">
    <NumberInput.Control>
      <NumberInput.IncrementTrigger>
        <Icon name="chevron-up" />
      </NumberInput.IncrementTrigger>
      <NumberInput.DecrementTrigger>
        <Icon name="chevron-down" />
      </NumberInput.DecrementTrigger>
    </NumberInput.Control>
    <NumberInput.Input />
  </NumberInput.Root>
</template>
