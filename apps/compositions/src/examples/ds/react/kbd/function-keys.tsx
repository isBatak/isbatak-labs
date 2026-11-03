import { Kbd } from "@isbatak/react-ui/kbd"
import { HStack } from "styled-system/jsx"

export function KbdFunctionKeysDemo() {
  return (
    <HStack gap="2">
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌃</Kbd>
    </HStack>
  )
}
