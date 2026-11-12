import { Badge } from "@isbatak/solid-ui/badge"
import { HStack } from "@isbatak/solid-ui/stack"

export function BadgeSizesDemo() {
  return (
    <HStack gap="2">
      <Badge size="2xs">2x small</Badge>
      <Badge size="xs">Extra small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </HStack>
  )
}
