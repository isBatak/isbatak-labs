import { CloseButton } from "@isbatak/react-ui/button"
import { HStack } from "@isbatak/react-ui/stack"

export function CloseButtonDemo() {
  return (
    <HStack gap="4">
      <CloseButton variant="ghost" />
      <CloseButton variant="outline" />
      <CloseButton variant="subtle" />
    </HStack>
  )
}
