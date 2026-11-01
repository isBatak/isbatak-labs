"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { HStack, styled } from "styled-system/jsx"

export function IconsBasicDemo() {
  return (
    <HStack gap="6" textStyle="lg">
      <styled.span display="inline-flex" alignItems="center" gap="2">
        <Icon name="check-circle" />
        Saved
      </styled.span>
      <styled.span display="inline-flex" alignItems="center" gap="2" color="fg.error">
        <Icon name="warning" />
        Failed
      </styled.span>
      <styled.span display="inline-flex" alignItems="center" gap="2">
        <Icon name="ai-sparkle" />
        Ask AI
      </styled.span>
    </HStack>
  )
}
