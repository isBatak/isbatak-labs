import { Radiomark } from "@isbatak/solid-ui/radiomark"
import { HStack } from "@isbatak/solid-ui/stack"

export function RadiomarkDemo() {
  return (
    <HStack gap="4">
      <Radiomark />
      <Radiomark checked />
      <Radiomark checked disabled />
    </HStack>
  )
}
