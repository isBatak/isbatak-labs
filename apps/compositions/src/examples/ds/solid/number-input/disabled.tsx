import { Icon } from "@isbatak/solid-ui/icon"
import { NumberInput } from "@isbatak/solid-ui/number-input"

export function NumberInputDisabledDemo() {
  return (
    <NumberInput.Root defaultValue="10" disabled maxW="xs">
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
