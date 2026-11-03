import { Badge } from "@isbatak/react-ui/badge"
import { HStack } from "styled-system/jsx"

export function BadgeSizesDemo() {
  return (
    <HStack gap="2">
      <Badge size="xs">Extra small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </HStack>
  )
}
