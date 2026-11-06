import { Icon } from "@isbatak/solid-ui/icon"
import { NumberInput } from "@isbatak/solid-ui/number-input"

export function NumberInputMinMaxDemo() {
  return (
    <NumberInput.Root defaultValue="5" min={0} max={10} maxW="xs">
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
