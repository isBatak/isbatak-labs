"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { HStack } from "styled-system/jsx"

export function IconsSizesDemo() {
  return (
    <HStack gap="5">
      <Icon name="star" size="xs" />
      <Icon name="star" size="sm" />
      <Icon name="star" size="md" />
      <Icon name="star" size="lg" />
      <Icon name="star" size="xl" />
      <Icon name="star" size="2xl" />
    </HStack>
  )
}
