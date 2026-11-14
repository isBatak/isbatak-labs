import { Avatar } from "@isbatak/solid-ui/avatar"
import { Tag } from "@isbatak/solid-ui/tag"
import { HStack } from "@isbatak/solid-ui/stack"

export function TagWithAvatarDemo() {
  return (
    <HStack gap="2">
      <Tag.Root size="sm" rounded="full">
        <Tag.StartElement>
          <Avatar.Root size="full">
            <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
            <Avatar.Fallback name="Vincent van Gogh" />
          </Avatar.Root>
        </Tag.StartElement>
        <Tag.Label>Jane</Tag.Label>
      </Tag.Root>
      <Tag.Root size="md" rounded="full">
        <Tag.StartElement>
          <Avatar.Root size="full">
            <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
            <Avatar.Fallback name="Vincent van Gogh" />
          </Avatar.Root>
        </Tag.StartElement>
        <Tag.Label>Jane</Tag.Label>
      </Tag.Root>
      <Tag.Root size="lg" rounded="full">
        <Tag.StartElement>
          <Avatar.Root size="full">
            <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
            <Avatar.Fallback name="Vincent van Gogh" />
          </Avatar.Root>
        </Tag.StartElement>
        <Tag.Label>Jane</Tag.Label>
      </Tag.Root>
      <Tag.Root size="xl" rounded="full">
        <Tag.StartElement>
          <Avatar.Root size="full">
            <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
            <Avatar.Fallback name="Vincent van Gogh" />
          </Avatar.Root>
        </Tag.StartElement>
        <Tag.Label>Jane</Tag.Label>
      </Tag.Root>
    </HStack>
  )
}
