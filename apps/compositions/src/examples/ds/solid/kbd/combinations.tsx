import { Kbd } from "@isbatak/solid-ui/kbd"
import { HStack } from "@isbatak/solid-ui/stack"

export function KbdCombinationsDemo() {
  return (
    <HStack gap="1">
      <Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>Del</Kbd>
    </HStack>
  )
}
