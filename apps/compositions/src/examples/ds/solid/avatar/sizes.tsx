import { Avatar } from "@isbatak/solid-ui/avatar"
import { HStack } from "@isbatak/solid-ui/stack"

export function AvatarSizesDemo() {
  return (
    <HStack gap="3">
      <Avatar.Root size="2xs">
        <Avatar.Fallback name="Jane Doe" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
      </Avatar.Root>
      <Avatar.Root size="xs">
        <Avatar.Fallback name="Jane Doe" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
      </Avatar.Root>
      <Avatar.Root size="sm">
        <Avatar.Fallback name="Jane Doe" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
      </Avatar.Root>
      <Avatar.Root size="md">
        <Avatar.Fallback name="Jane Doe" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
      </Avatar.Root>
      <Avatar.Root size="lg">
        <Avatar.Fallback name="Jane Doe" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
      </Avatar.Root>
      <Avatar.Root size="xl">
        <Avatar.Fallback name="Jane Doe" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
      </Avatar.Root>
      <Avatar.Root size="2xl">
        <Avatar.Fallback name="Jane Doe" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
      </Avatar.Root>
    </HStack>
  )
}
