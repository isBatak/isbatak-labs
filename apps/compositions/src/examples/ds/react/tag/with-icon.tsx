import { Icon } from "@isbatak/react-ui/icon"
import { Tag } from "@isbatak/react-ui/tag"
import { HStack } from "styled-system/jsx"

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
