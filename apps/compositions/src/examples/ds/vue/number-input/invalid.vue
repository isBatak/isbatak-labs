<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { NumberInput } from "@isbatak/vue-ui/number-input"
</script>

<template>
  <NumberInput.Root defaultValue="10" :invalid="true" maxW="xs">
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
