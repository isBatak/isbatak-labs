import { DateInput, parseDate } from "@isbatak/react-ui/date-input"
import { useState } from "react"
import { Stack, styled } from "styled-system/jsx"

export function DateInputControlledDemo() {
  const [value, setValue] = useState([parseDate("2026-11-08")])

  return (
    <Stack gap="3" maxW="xs">
      <DateInput.Root value={value} onValueChange={(details) => setValue(details.value)}>
        <DateInput.Label>Date</DateInput.Label>
        <DateInput.Control>
          <DateInput.SegmentGroup>
            <DateInput.Segments />
          </DateInput.SegmentGroup>
        </DateInput.Control>
        <DateInput.HiddenInput />
      </DateInput.Root>
      <styled.p textStyle="sm" color="fg.muted">
        Value: {value[0]?.toString() ?? "none"}
      </styled.p>
    </Stack>
  )
}
