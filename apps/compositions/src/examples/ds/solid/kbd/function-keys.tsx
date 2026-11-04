import { Kbd } from "@isbatak/solid-ui/kbd"
import { HStack } from "@isbatak/solid-ui/stack"

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
