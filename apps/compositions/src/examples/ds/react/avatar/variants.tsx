import { Avatar } from "@isbatak/react-ui/avatar"
import { HStack } from "@isbatak/react-ui/stack"

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
