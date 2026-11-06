import { Icon } from "@isbatak/solid-ui/icon"
import { NumberInput } from "@isbatak/solid-ui/number-input"

export function NumberInputMouseWheelDemo() {
  return (
    <NumberInput.Root defaultValue="10" allowMouseWheel maxW="xs">
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
