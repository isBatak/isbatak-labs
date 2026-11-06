import { Icon } from "@isbatak/solid-ui/icon"
import { NumberInput } from "@isbatak/solid-ui/number-input"
import { Stack } from "@isbatak/solid-ui/stack"

export function NumberInputVariantsDemo() {
  return (
    <Stack gap="4" w="full" maxW="xs">
      <NumberInput.Root defaultValue="10" variant="outline">
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
      <NumberInput.Root defaultValue="10" variant="subtle">
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
      <NumberInput.Root defaultValue="10" variant="plain">
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
      <NumberInput.Root defaultValue="10" variant="flushed">
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
