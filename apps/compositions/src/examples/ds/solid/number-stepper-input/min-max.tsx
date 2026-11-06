import { Icon } from "@isbatak/solid-ui/icon"
import { NumberStepperInput } from "@isbatak/solid-ui/number-stepper-input"

export function NumberStepperInputMinMaxDemo() {
  return (
    <NumberStepperInput.Root defaultValue="3" min={1} max={5} maxW="40">
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
  )
}
