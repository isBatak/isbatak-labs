"use client"

import { Badge } from "@isbatak/react-ui/badge"
import { HStack } from "styled-system/jsx"

export function BadgeDemo() {
  return (
    <HStack gap="2">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="surface" colorPalette="green">
        Surface
      </Badge>
    </HStack>
  )
}
