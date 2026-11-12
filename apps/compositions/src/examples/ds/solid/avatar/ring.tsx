import { Avatar } from "@isbatak/solid-ui/avatar"
import { HStack } from "@isbatak/solid-ui/stack"

export function AvatarRingDemo() {
  return (
    <HStack gap="4">
      <Avatar.Root ring colorPalette="pink">
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
      </Avatar.Root>
      <Avatar.Root ring colorPalette="green">
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/54.jpg" />
      </Avatar.Root>
      <Avatar.Root ring colorPalette="blue">
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/42.jpg" />
      </Avatar.Root>
    </HStack>
  )
}
