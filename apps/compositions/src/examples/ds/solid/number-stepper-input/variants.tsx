import { Icon } from "@isbatak/solid-ui/icon"
import { NumberStepperInput } from "@isbatak/solid-ui/number-stepper-input"
import { Stack } from "@isbatak/solid-ui/stack"

export function NumberStepperInputVariantsDemo() {
  return (
    <Stack gap="5" w="full" maxW="40">
      <NumberStepperInput.Root defaultValue="1" min={0} variant="outline">
        <NumberStepperInput.Label>variant outline</NumberStepperInput.Label>
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
      <NumberStepperInput.Root defaultValue="1" min={0} variant="subtle">
        <NumberStepperInput.Label>variant subtle</NumberStepperInput.Label>
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
      <NumberStepperInput.Root defaultValue="1" min={0} variant="plain">
        <NumberStepperInput.Label>variant plain</NumberStepperInput.Label>
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
    </Stack>
  )
}
