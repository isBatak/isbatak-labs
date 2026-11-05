import { Radiomark } from "@isbatak/solid-ui/radiomark"
import { HStack } from "@isbatak/solid-ui/stack"

export function RadiomarkVariantsDemo() {
  return (
    <HStack gap="4">
      <Radiomark checked variant="solid" />
      <Radiomark checked variant="outline" />
      <Radiomark checked variant="subtle" />
      <Radiomark checked variant="inverted" />
    </HStack>
  )
}
