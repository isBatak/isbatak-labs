import { Icon } from "@isbatak/solid-ui/icon"
import { Tag } from "@isbatak/solid-ui/tag"
import { HStack } from "@isbatak/solid-ui/stack"

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
