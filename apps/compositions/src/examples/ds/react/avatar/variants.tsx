import { Avatar } from "@isbatak/react-ui/avatar"
import { HStack } from "@isbatak/react-ui/stack"

export function AvatarVariantsDemo() {
  return (
    <HStack gap="3">
      <Avatar.Root variant="solid">
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
      <Avatar.Root variant="outline">
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
      <Avatar.Root variant="subtle">
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
    </HStack>
  )
}
