import { Icon } from "@isbatak/solid-ui/icon"
import { NumberStepperInput } from "@isbatak/solid-ui/number-stepper-input"
import { Stack } from "@isbatak/solid-ui/stack"

export function NumberStepperInputSizesDemo() {
  return (
    <Stack gap="5" w="full" maxW="40">
      <NumberStepperInput.Root defaultValue="1" min={0} size="sm">
        <NumberStepperInput.Label>size sm</NumberStepperInput.Label>
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
      <NumberStepperInput.Root defaultValue="1" min={0} size="md">
        <NumberStepperInput.Label>size md</NumberStepperInput.Label>
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
      <NumberStepperInput.Root defaultValue="1" min={0} size="lg">
        <NumberStepperInput.Label>size lg</NumberStepperInput.Label>
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
