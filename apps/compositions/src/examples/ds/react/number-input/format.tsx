import { Icon } from "@isbatak/react-ui/icon"
import { NumberInput } from "@isbatak/react-ui/number-input"

export function NumberInputFormatDemo() {
  return (
    <NumberInput.Root defaultValue="45" formatOptions={{ style: "currency", currency: "EUR" }} maxW="xs">
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
