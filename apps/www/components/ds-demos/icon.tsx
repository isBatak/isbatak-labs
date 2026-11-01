"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { HStack } from "styled-system/jsx"

export function IconDemo() {
  return (
    <HStack gap="4">
      <Icon name="home" size="lg" />
      <Icon name="search" size="lg" />
      <Icon name="bell" size="lg" />
      <Icon name="settings" size="lg" />
    </HStack>
  )
}
