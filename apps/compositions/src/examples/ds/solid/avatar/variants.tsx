import { Avatar } from "@isbatak/solid-ui/avatar"
import { HStack } from "@isbatak/solid-ui/stack"

export function AvatarVariantsDemo() {
  return (
    <HStack gap="3">
      <Avatar.Root variant="solid">
        <Avatar.Fallback name="Jane Doe" />
      </Avatar.Root>
      <Avatar.Root variant="outline">
        <Avatar.Fallback name="Jane Doe" />
      </Avatar.Root>
      <Avatar.Root variant="subtle">
        <Avatar.Fallback name="Jane Doe" />
      </Avatar.Root>
    </HStack>
  )
}
