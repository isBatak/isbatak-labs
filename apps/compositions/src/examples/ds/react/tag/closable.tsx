import { Icon } from "@isbatak/react-ui/icon"
import { Tag } from "@isbatak/react-ui/tag"
import { HStack } from "styled-system/jsx"

export function TagClosableDemo() {
  return (
    <HStack gap="2">
      <Tag.Root>
        <Tag.StartElement>
          <Icon name="star" />
        </Tag.StartElement>
        <Tag.Label>Tag 1</Tag.Label>
        <Tag.EndElement>
          <Tag.CloseTrigger />
        </Tag.EndElement>
      </Tag.Root>
      <Tag.Root>
        <Tag.Label>Tag 2</Tag.Label>
        <Tag.EndElement>
          <Tag.CloseTrigger />
        </Tag.EndElement>
      </Tag.Root>
    </HStack>
  )
}
