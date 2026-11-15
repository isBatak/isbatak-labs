import { Spinner } from "@isbatak/solid-ui/spinner"
import { HStack } from "@isbatak/solid-ui/stack"

export function SpinnerSizesDemo() {
  return (
    <HStack gap="5">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </HStack>
  )
}
