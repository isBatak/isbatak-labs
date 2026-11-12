import { Badge } from "@isbatak/solid-ui/badge"
import { HStack } from "@isbatak/solid-ui/stack"

export function BadgeDemo() {
  return (
    <HStack gap="2">
      <Badge>Default</Badge>
      <Badge colorPalette="green">Success</Badge>
      <Badge colorPalette="red">Removed</Badge>
      <Badge colorPalette="purple">New</Badge>
    </HStack>
  )
}
