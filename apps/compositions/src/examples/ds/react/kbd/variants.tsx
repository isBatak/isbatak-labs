import { Kbd } from "@isbatak/react-ui/kbd"
import { HStack } from "@isbatak/react-ui/stack"

export function KbdVariantsDemo() {
  return (
    <HStack gap="4">
      <Kbd variant="raised">Shift + Tab</Kbd>
      <Kbd variant="outline">Shift + Tab</Kbd>
      <Kbd variant="subtle">Shift + Tab</Kbd>
      <Kbd variant="plain">Shift + Tab</Kbd>
    </HStack>
  )
}
