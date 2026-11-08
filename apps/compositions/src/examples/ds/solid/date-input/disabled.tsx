import { DateInput, parseDate } from "@isbatak/solid-ui/date-input"

export function DateInputDisabledDemo() {
  return (
    <DateInput.Root disabled defaultValue={[parseDate("2026-11-08")]} maxW="xs">
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
