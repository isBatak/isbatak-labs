import { Icon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function IconColorDemo() {
  return (
    <HStack gap="4">
      <Icon name="bell" size="lg" color="fg.error" />
      <Icon name="bell" size="lg" color="fg.success" />
      <Icon name="bell" size="lg" color="fg.info" />
    </HStack>
  )
}
