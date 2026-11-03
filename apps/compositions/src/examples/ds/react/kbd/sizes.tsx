import { Kbd } from "@isbatak/react-ui/kbd"
import { HStack } from "styled-system/jsx"

export function KbdSizesDemo() {
  return (
    <HStack gap="4">
      <Kbd size="sm">Shift + Tab</Kbd>
      <Kbd size="md">Shift + Tab</Kbd>
      <Kbd size="lg">Shift + Tab</Kbd>
    </HStack>
  )
}
