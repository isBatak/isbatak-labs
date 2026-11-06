import { Icon } from "@isbatak/react-ui/icon"
import { NumberInput } from "@isbatak/react-ui/number-input"

export function NumberInputInvalidDemo() {
  return (
    <NumberInput.Root defaultValue="10" invalid maxW="xs">
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
