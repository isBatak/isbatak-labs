<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { NumberStepperInput } from "@isbatak/vue-ui/number-stepper-input"
</script>

<template>
  <NumberStepperInput.Root defaultValue="1" :min="0" maxW="40">
    <NumberStepperInput.Label>Quantity</NumberStepperInput.Label>
    <NumberStepperInput.Control>
      <NumberStepperInput.Input />
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
