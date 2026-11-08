import { DateInput } from "@isbatak/solid-ui/date-input"
import { Span } from "@isbatak/solid-ui/span"

export function DateInputRangeDemo() {
  return (
    <DateInput.Root selectionMode="range" maxW="sm">
      <DateInput.Label>Trip dates</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup index={0}>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
        <Span color="fg.muted" px="2">
          –
        </Span>
        <DateInput.SegmentGroup index={1}>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
  )
}
