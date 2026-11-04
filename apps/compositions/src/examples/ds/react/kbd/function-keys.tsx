import { Kbd } from "@isbatak/react-ui/kbd"
import { HStack } from "@isbatak/react-ui/stack"

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
