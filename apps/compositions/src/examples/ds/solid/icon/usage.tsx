import { Icon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function IconDemo() {
  return (
    <HStack gap="4">
      <Icon name="home" size="lg" />
      <Icon name="search" size="lg" />
      <Icon name="bell" size="lg" />
      <Icon name="settings" size="lg" />
    </HStack>
  )
}
