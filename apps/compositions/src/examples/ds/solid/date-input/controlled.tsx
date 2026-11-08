import { DateInput, parseDate } from "@isbatak/solid-ui/date-input"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"

export function DateInputControlledDemo() {
  const [value, setValue] = createSignal([parseDate("2026-11-08")])

  return (
    <Stack gap="3" maxW="xs">
      <DateInput.Root value={value()} onValueChange={(details) => setValue(details.value)}>
        <DateInput.Label>Date</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup>
            <DateInput.Segments />
          </DateInput.SegmentGroup>
        </DateInput.Control>
        <DateInput.HiddenInput />
      </DateInput.Root>
      <Text textStyle="sm" color="fg.muted">
        Value: {value()[0]?.toString() ?? "none"}
      </Text>
    </Stack>
  )
}
