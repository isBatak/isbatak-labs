import { DateInput } from "@isbatak/solid-ui/date-input"

export function DateInputDemo() {
  return (
    <DateInput.Root maxW="xs">
      <DateInput.Label>Date</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
  )
}
