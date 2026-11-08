import { DateInput } from "@isbatak/react-ui/date-input"
import { field } from "@isbatak/panda-ds/recipes"

export function DateInputInvalidDemo() {
  const fieldClasses = field()

  return (
    <DateInput.Root invalid maxW="xs">
      <DateInput.Label>Date</DateInput.Label>
      <DateInput.Control>
        <DateInput.SegmentGroup>
          <DateInput.Segments />
        </DateInput.SegmentGroup>
      </DateInput.Control>
      <DateInput.HiddenInput />
      <span className={fieldClasses.errorText}>Enter a date in the future.</span>
    </DateInput.Root>
  )
}
