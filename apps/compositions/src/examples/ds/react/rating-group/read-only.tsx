import { RatingGroup } from "@isbatak/react-ui/rating-group"

export function RatingGroupReadOnlyDemo() {
  return (
    <RatingGroup.Root count={5} defaultValue={4} readOnly>
      <RatingGroup.Label>Rating</RatingGroup.Label>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
