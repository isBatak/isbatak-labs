import { DateInput } from "@isbatak/react-ui/date-input"
import { styled } from "styled-system/jsx"

export function DateInputRangeDemo() {
  return (
    <DateInput.Root selectionMode="range" maxW="sm">
      <DateInput.Label>Trip dates</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup index={0}>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
        <styled.span color="fg.muted" px="2">
          –
        </styled.span>
        <DateInput.SegmentGroup index={1}>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
  )
}
