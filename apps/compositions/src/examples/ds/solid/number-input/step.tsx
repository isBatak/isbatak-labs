import { Icon } from "@isbatak/solid-ui/icon"
import { NumberInput } from "@isbatak/solid-ui/number-input"

export function NumberInputStepDemo() {
  return (
    <NumberInput.Root defaultValue="2" step={0.5} maxW="xs">
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
  )
}
