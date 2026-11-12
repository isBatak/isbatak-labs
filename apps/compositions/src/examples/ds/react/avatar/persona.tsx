import { Avatar } from "@isbatak/react-ui/avatar"
import { HStack, Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function AvatarPersonaDemo() {
  return (
    <Stack gap="8">
      <HStack gap="4">
        <Avatar.Root>
          <Avatar.Fallback name="John Mason" />
          <Avatar.Image src="https://i.pravatar.cc/300?u=iu" />
        </Avatar.Root>
        <Stack gap="0">
          <Text fontWeight="medium">John Mason</Text>
          <Text color="fg.muted" textStyle="sm">
            john.mason@example.com
          </Text>
        </Stack>
      </HStack>
      <HStack gap="4">
        <Avatar.Root>
          <Avatar.Fallback name="Melissa Jones" />
          <Avatar.Image src="https://i.pravatar.cc/300?u=po" />
        </Avatar.Root>
        <Stack gap="0">
          <Text fontWeight="medium">Melissa Jones</Text>
          <Text color="fg.muted" textStyle="sm">
            melissa.jones@example.com
          </Text>
        </Stack>
      </HStack>
    </Stack>
  )
}
