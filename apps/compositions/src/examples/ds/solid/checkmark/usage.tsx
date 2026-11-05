import { Checkmark } from "@isbatak/solid-ui/checkmark"
import { HStack } from "@isbatak/solid-ui/stack"

export function CheckmarkDemo() {
  return (
    <HStack gap="4">
      <Checkmark />
      <Checkmark checked />
      <Checkmark indeterminate />
      <Checkmark checked disabled />
    </HStack>
  )
}
