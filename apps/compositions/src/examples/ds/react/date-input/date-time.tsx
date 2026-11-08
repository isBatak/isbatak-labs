import { DateInput } from "@isbatak/react-ui/date-input"

export function DateInputDateTimeDemo() {
  return (
    <DateInput.Root granularity="minute" maxW="xs">
      <DateInput.Label>Meeting</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
    </DateInput.Root>
  )
}
