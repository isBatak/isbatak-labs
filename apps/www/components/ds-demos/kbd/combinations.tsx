"use client"

import { Kbd } from "@isbatak/react-ui/kbd"
import { HStack } from "styled-system/jsx"

export function KbdCombinationsDemo() {
  return (
    <HStack gap="1">
      <Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>Del</Kbd>
    </HStack>
  )
}
