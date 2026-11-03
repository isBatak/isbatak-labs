import { Badge } from "@isbatak/react-ui/badge"
import { HStack } from "styled-system/jsx"

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
