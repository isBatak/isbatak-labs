import { RatingGroup } from "@isbatak/react-ui/rating-group"

export function RatingGroupDisabledDemo() {
  return (
    <RatingGroup.Root count={5} defaultValue={3} disabled>
      <RatingGroup.Label>Rating</RatingGroup.Label>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
