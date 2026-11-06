import { Icon } from "@isbatak/react-ui/icon"
import { NumberInput } from "@isbatak/react-ui/number-input"
import { Stack } from "@isbatak/react-ui/stack"

export function NumberInputSizesDemo() {
  return (
    <Stack gap="4" w="full" maxW="xs">
      <NumberInput.Root defaultValue="10" size="xs">
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
      <NumberInput.Root defaultValue="10" size="sm">
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
      <NumberInput.Root defaultValue="10" size="md">
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
      <NumberInput.Root defaultValue="10" size="lg">
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
    </Stack>
  )
}
