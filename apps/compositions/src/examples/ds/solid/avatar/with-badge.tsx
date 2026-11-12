import { Avatar } from "@isbatak/solid-ui/avatar"
import { Circle } from "@isbatak/solid-ui/circle"
import { Float } from "@isbatak/solid-ui/float"

export function AvatarWithBadgeDemo() {
  return (
    <Avatar.Root colorPalette="green" variant="subtle">
      <Avatar.Fallback name="Dari Ann" />
      <Float placement="bottom-end" offsetX="1" offsetY="1">
        <Circle bg="green.solid" size="2" outline="[0.2em solid]" outlineColor="bg" />
      </Float>
    </Avatar.Root>
  )
}
