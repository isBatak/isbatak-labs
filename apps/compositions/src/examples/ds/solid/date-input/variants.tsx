import { DateInput } from "@isbatak/solid-ui/date-input"
import { Stack } from "@isbatak/solid-ui/stack"

export function DateInputVariantsDemo() {
  return (
    <Stack gap="4" maxW="xs">
      <DateInput.Root variant="outline">
        <DateInput.Label>variant outline</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup>
            <DateInput.Segments />
          </DateInput.SegmentGroup>
        </DateInput.Control>
        <DateInput.HiddenInput />
      </DateInput.Root>
      <DateInput.Root variant="subtle">
        <DateInput.Label>variant subtle</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup>
            <DateInput.Segments />
          </DateInput.SegmentGroup>
        </DateInput.Control>
        <DateInput.HiddenInput />
      </DateInput.Root>
      <DateInput.Root variant="plain">
        <DateInput.Label>variant plain</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup>
            <DateInput.Segments />
          </DateInput.SegmentGroup>
        </DateInput.Control>
        <DateInput.HiddenInput />
      </DateInput.Root>
      <DateInput.Root variant="flushed">
        <DateInput.Label>variant flushed</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup>
            <DateInput.Segments />
          </DateInput.SegmentGroup>
        </DateInput.Control>
        <DateInput.HiddenInput />
      </DateInput.Root>
    </Stack>
  )
}
