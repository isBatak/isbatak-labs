import { CheckboxCard } from "@isbatak/solid-ui/checkbox-card"
import { Stack } from "@isbatak/solid-ui/stack"

export function CheckboxCardVariantsDemo() {
  return (
    <Stack gap="3" maxW="xs">
      <CheckboxCard.Root variant="surface" defaultChecked>
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Label>Surface</CheckboxCard.Label>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
      <CheckboxCard.Root variant="subtle" defaultChecked>
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Label>Subtle</CheckboxCard.Label>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
      <CheckboxCard.Root variant="outline" defaultChecked>
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Label>Outline</CheckboxCard.Label>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
    </Stack>
  )
}
