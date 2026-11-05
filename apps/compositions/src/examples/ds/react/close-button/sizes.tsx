import { CloseButton } from "@isbatak/react-ui/button"
import { HStack } from "@isbatak/react-ui/stack"

export function CloseButtonSizesDemo() {
  return (
    <HStack gap="4">
      <CloseButton size="xs" variant="outline" />
      <CloseButton size="sm" variant="outline" />
      <CloseButton size="md" variant="outline" />
      <CloseButton size="lg" variant="outline" />
    </HStack>
  )
}
