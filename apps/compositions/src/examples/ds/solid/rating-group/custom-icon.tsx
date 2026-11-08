import { RatingGroup } from "@isbatak/solid-ui/rating-group"
import { Icon } from "@isbatak/solid-ui/icon"

export function RatingGroupCustomIconDemo() {
  return (
    <RatingGroup.Root count={5} defaultValue={4} colorPalette="red">
      <RatingGroup.Label>Favorite</RatingGroup.Label>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items icon={(attrs) => <Icon name="heart-filled" {...attrs} />} />
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
