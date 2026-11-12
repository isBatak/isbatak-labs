import { Avatar } from "@isbatak/solid-ui/avatar"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function AvatarColorsDemo() {
  return (
    <Stack gap="2" align="flex-start">
      <HStack gap="10">
        <Text minW="[8ch]">gray</Text>
        <Avatar.Root colorPalette="gray">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="gray">
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="gray">
          <Avatar.Fallback />
        </Avatar.Root>
      </HStack>
      <HStack gap="10">
        <Text minW="[8ch]">red</Text>
        <Avatar.Root colorPalette="red">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="red">
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="red">
          <Avatar.Fallback />
        </Avatar.Root>
      </HStack>
      <HStack gap="10">
        <Text minW="[8ch]">green</Text>
        <Avatar.Root colorPalette="green">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="green">
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="green">
          <Avatar.Fallback />
        </Avatar.Root>
      </HStack>
      <HStack gap="10">
        <Text minW="[8ch]">blue</Text>
        <Avatar.Root colorPalette="blue">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="blue">
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="blue">
          <Avatar.Fallback />
        </Avatar.Root>
      </HStack>
      <HStack gap="10">
        <Text minW="[8ch]">teal</Text>
        <Avatar.Root colorPalette="teal">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="teal">
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="teal">
          <Avatar.Fallback />
        </Avatar.Root>
      </HStack>
      <HStack gap="10">
        <Text minW="[8ch]">purple</Text>
        <Avatar.Root colorPalette="purple">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="purple">
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
        <Avatar.Root colorPalette="purple">
          <Avatar.Fallback />
        </Avatar.Root>
      </HStack>
    </Stack>
  )
}
