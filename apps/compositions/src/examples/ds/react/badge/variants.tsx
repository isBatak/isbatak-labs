import { Badge } from "@isbatak/react-ui/badge"
import { HStack } from "styled-system/jsx"

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
