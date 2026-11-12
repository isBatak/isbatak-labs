import { Badge } from "@isbatak/solid-ui/badge"
import { HStack } from "@isbatak/solid-ui/stack"

export function BadgeVariantsDemo() {
  return (
    <HStack gap="2">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="surface">Surface</Badge>
      <Badge variant="plain">Plain</Badge>
    </HStack>
  )
}
