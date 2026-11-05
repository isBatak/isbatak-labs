import { Checkmark } from "@isbatak/solid-ui/checkmark"
import { HStack } from "@isbatak/solid-ui/stack"

export function CheckmarkVariantsDemo() {
  return (
    <HStack gap="4">
      <Checkmark checked variant="solid" />
      <Checkmark checked variant="outline" />
      <Checkmark checked variant="subtle" />
      <Checkmark checked variant="plain" />
      <Checkmark checked variant="inverted" />
    </HStack>
  )
}
