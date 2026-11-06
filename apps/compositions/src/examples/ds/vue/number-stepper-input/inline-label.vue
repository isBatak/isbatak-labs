<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { NumberStepperInput } from "@isbatak/vue-ui/number-stepper-input"
</script>

<template>
  <NumberStepperInput.Root defaultValue="0.01" :step="0.01" :min="0.01" maxW="40">
    <NumberStepperInput.Label>Volume</NumberStepperInput.Label>
    <NumberStepperInput.Control>
      <NumberStepperInput.Input />
      <NumberStepperInput.InlineLabel>Lots</NumberStepperInput.InlineLabel>
      <NumberStepperInput.TriggerGroup>
        <NumberStepperInput.DecrementTrigger>
          <Icon name="minus" />
        </NumberStepperInput.DecrementTrigger>
        <NumberStepperInput.IncrementTrigger>
          <Icon name="plus" />
        </NumberStepperInput.IncrementTrigger>
      </NumberStepperInput.TriggerGroup>
    </NumberStepperInput.Control>
  </NumberStepperInput.Root>
</template>
