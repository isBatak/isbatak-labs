import { Avatar } from "@isbatak/react-ui/avatar"
import { Tag } from "@isbatak/react-ui/tag"
import { HStack } from "styled-system/jsx"

export function TagWithAvatarDemo() {
  return (
    <HStack gap="2">
      <Tag.Root size="sm" rounded="full">
        <Tag.StartElement>
          <Avatar.Root size="full">
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
            <Avatar.Fallback name="Segun Adebayo" />
          </Avatar.Root>
        </Tag.StartElement>
        <Tag.Label>Segun</Tag.Label>
      </Tag.Root>
      <Tag.Root size="md" rounded="full">
        <Tag.StartElement>
          <Avatar.Root size="full">
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
            <Avatar.Fallback name="Segun Adebayo" />
          </Avatar.Root>
        </Tag.StartElement>
        <Tag.Label>Segun</Tag.Label>
      </Tag.Root>
      <Tag.Root size="lg" rounded="full">
        <Tag.StartElement>
          <Avatar.Root size="full">
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
            <Avatar.Fallback name="Segun Adebayo" />
          </Avatar.Root>
        </Tag.StartElement>
        <Tag.Label>Segun</Tag.Label>
      </Tag.Root>
      <Tag.Root size="xl" rounded="full">
        <Tag.StartElement>
          <Avatar.Root size="full">
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
            <Avatar.Fallback name="Segun Adebayo" />
          </Avatar.Root>
        </Tag.StartElement>
        <Tag.Label>Segun</Tag.Label>
      </Tag.Root>
    </HStack>
  )
}
