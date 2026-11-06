import { Icon } from "@isbatak/solid-ui/icon"
import { NumberStepperInput } from "@isbatak/solid-ui/number-stepper-input"

export function NumberStepperInputDisabledDemo() {
  return (
    <NumberStepperInput.Root defaultValue="1" disabled maxW="40">
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
  )
}
