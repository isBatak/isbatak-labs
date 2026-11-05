import { Radiomark } from "@isbatak/react-ui/radiomark"
import { HStack } from "@isbatak/react-ui/stack"

export function RadiomarkDemo() {
  return (
    <HStack gap="4">
      <Radiomark />
      <Radiomark checked />
      <Radiomark checked disabled />
    </HStack>
  )
}
