import { DateInput, parseDate } from "@isbatak/solid-ui/date-input"

export function DateInputLocaleDemo() {
  return (
    <DateInput.Root locale="de-DE" defaultValue={[parseDate("2026-11-08")]} maxW="xs">
      <DateInput.Label>Datum</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
  )
}
