import { RatingGroup } from "@isbatak/solid-ui/rating-group"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"

export function RatingGroupControlledDemo() {
  const [value, setValue] = createSignal(3)

  return (
    <Stack gap="3">
      <RatingGroup.Root count={5} value={value()} onValueChange={(details) => setValue(details.value)}>
        <RatingGroup.Label>Rating</RatingGroup.Label>
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          <RatingGroup.Items />
        </RatingGroup.Control>
      </RatingGroup.Root>
      <Text textStyle="sm" color="fg.muted">
        Value: {value()}
      </Text>
    </Stack>
  )
}
