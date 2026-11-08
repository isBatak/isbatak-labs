import { RatingGroup } from "@isbatak/solid-ui/rating-group"
import { Stack } from "@isbatak/solid-ui/stack"

export function RatingGroupColorsDemo() {
  return (
    <Stack gap="4">
      <RatingGroup.Root count={5} defaultValue={3} colorPalette="gray">
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          <RatingGroup.Items />
        </RatingGroup.Control>
      </RatingGroup.Root>
      <RatingGroup.Root count={5} defaultValue={3} colorPalette="blue">
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          <RatingGroup.Items />
        </RatingGroup.Control>
      </RatingGroup.Root>
      <RatingGroup.Root count={5} defaultValue={3} colorPalette="green">
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          <RatingGroup.Items />
        </RatingGroup.Control>
      </RatingGroup.Root>
      <RatingGroup.Root count={5} defaultValue={3} colorPalette="orange">
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          <RatingGroup.Items />
        </RatingGroup.Control>
      </RatingGroup.Root>
      <RatingGroup.Root count={5} defaultValue={3} colorPalette="pink">
        <RatingGroup.HiddenInput />
        <RatingGroup.Control>
          <RatingGroup.Items />
        </RatingGroup.Control>
      </RatingGroup.Root>
    </Stack>
  )
}
