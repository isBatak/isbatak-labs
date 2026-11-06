import { Icon } from "@isbatak/react-ui/icon"
import { NumberStepperInput } from "@isbatak/react-ui/number-stepper-input"

export function NumberStepperInputNarrowDemo() {
  return (
    <NumberStepperInput.Root defaultValue="1" min={0} w="20">
      <NumberStepperInput.Label>Qty</NumberStepperInput.Label>
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
