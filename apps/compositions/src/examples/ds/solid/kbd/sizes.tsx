import { Kbd } from "@isbatak/solid-ui/kbd"
import { HStack } from "@isbatak/solid-ui/stack"

export function KbdSizesDemo() {
  return (
    <HStack gap="4">
      <Kbd size="sm">Shift + Tab</Kbd>
      <Kbd size="md">Shift + Tab</Kbd>
      <Kbd size="lg">Shift + Tab</Kbd>
    </HStack>
  )
}
