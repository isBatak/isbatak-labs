import { Icon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function IconSizesDemo() {
  return (
    <HStack gap="4">
      <Icon name="bell" size="xs" />
      <Icon name="bell" size="sm" />
      <Icon name="bell" size="md" />
      <Icon name="bell" size="lg" />
      <Icon name="bell" size="xl" />
      <Icon name="bell" size="2xl" />
    </HStack>
  )
}
