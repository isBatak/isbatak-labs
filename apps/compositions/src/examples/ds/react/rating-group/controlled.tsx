import { RatingGroup } from "@isbatak/react-ui/rating-group"
import { useState } from "react"
import { Stack, styled } from "styled-system/jsx"

export function RatingGroupControlledDemo() {
  const [value, setValue] = useState(3)

  return (
    <Stack gap="3">
      <RatingGroup.Root count={5} value={value} onValueChange={(details) => setValue(details.value)}>
        <RatingGroup.Label>Rating</RatingGroup.Label>
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          <RatingGroup.Items />
        </RatingGroup.Control>
      </RatingGroup.Root>
      <styled.p textStyle="sm" color="fg.muted">
        Value: {value}
      </styled.p>
    </Stack>
  )
}
