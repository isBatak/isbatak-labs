import { Icon } from "@isbatak/solid-ui/icon"
import { Tag } from "@isbatak/solid-ui/tag"
import { HStack } from "@isbatak/solid-ui/stack"

export function TagWithIconDemo() {
  return (
    <HStack gap="2">
      <Tag.Root>
        <Tag.StartElement>
          <Icon name="star" />
        </Tag.StartElement>
        <Tag.Label>Favorite</Tag.Label>
      </Tag.Root>
      <Tag.Root colorPalette="green">
        <Tag.Label>Verified</Tag.Label>
        <Tag.EndElement>
          <Icon name="check-circle" />
        </Tag.EndElement>
      </Tag.Root>
    </HStack>
  )
}
