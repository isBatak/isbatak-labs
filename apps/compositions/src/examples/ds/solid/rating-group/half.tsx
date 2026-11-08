import { RatingGroup } from "@isbatak/solid-ui/rating-group"

export function RatingGroupHalfDemo() {
  return (
    <RatingGroup.Root count={5} defaultValue={2.5} allowHalf>
      <RatingGroup.Label>Rating</RatingGroup.Label>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
