import { CloseButton } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"

export function CloseButtonDemo() {
  return (
    <HStack gap="4">
      <CloseButton variant="ghost" />
      <CloseButton variant="outline" />
      <CloseButton variant="subtle" />
    </HStack>
  )
}
