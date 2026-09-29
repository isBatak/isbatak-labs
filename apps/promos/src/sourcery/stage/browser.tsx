import type { CSSProperties, ReactNode } from "react"
import { Box, HStack, styled } from "@isbatak/panda-ds/jsx"

import { BROWSER, PAGE } from "../site/layout"

export function TrafficLights() {
  return (
    <HStack gap="2">
      <Box width="3" height="3" borderRadius="full" bg="#ff5f57" />
      <Box width="3" height="3" borderRadius="full" bg="#febc2e" />
      <Box width="3" height="3" borderRadius="full" bg="#28c840" />
    </HStack>
  )
}

export function Browser({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <Box
      position="absolute"
      left="0"
      top="0"
      overflow="hidden"
      borderWidth="1px"
      borderColor="gray.200"
      bg="bg"
      boxShadow="0 40px 120px -20px rgba(15, 15, 30, 0.22), 0 12px 32px -8px rgba(15, 15, 30, 0.12)"
      style={{ width: BROWSER.width, height: BROWSER.height, ...style }}
    >
      <HStack height="44px" px="4" gap="4" bg="gray.50" borderBottomWidth="1px" borderColor="gray.200">
        <TrafficLights />
        <HStack
          flex="1"
          maxW="md"
          mx="auto"
          height="7"
          px="3"
          justify="center"
          bg="bg"
          borderWidth="1px"
          borderColor="gray.200"
          fontFamily="mono"
          textStyle="xs"
          color="fg.muted"
        >
          <styled.span color="fg.subtle">localhost:3000</styled.span>
          <styled.span ms="-2">/tools/sourcery</styled.span>
        </HStack>
        <Box width="14" />
      </HStack>
      <Box style={{ width: PAGE.width, height: PAGE.height }}>{children}</Box>
    </Box>
  )
}
