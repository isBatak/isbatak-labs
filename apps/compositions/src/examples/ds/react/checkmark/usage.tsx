import { Checkmark } from "@isbatak/react-ui/checkmark"
import { HStack } from "@isbatak/react-ui/stack"

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
