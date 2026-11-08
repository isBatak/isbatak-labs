import { RatingGroup } from "@isbatak/react-ui/rating-group"
import { Icon } from "@isbatak/react-ui/icon"

export function RatingGroupCustomIconDemo() {
  return (
    <RatingGroup.Root count={5} defaultValue={4} colorPalette="red">
      <RatingGroup.Label>Favorite</RatingGroup.Label>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items icon={<Icon name="heart-filled" />} />
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
