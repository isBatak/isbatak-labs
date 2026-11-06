<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { NumberStepperInput } from "@isbatak/svelte-ui/number-stepper-input"
</script>

<Box maxW="40" w="full">
  <NumberStepperInput.Root defaultValue="3" min={1} max={5}>
    <NumberStepperInput.Label>Guests</NumberStepperInput.Label>
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
</Box>
