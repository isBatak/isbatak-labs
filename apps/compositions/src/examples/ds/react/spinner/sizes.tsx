import { Spinner } from "@isbatak/react-ui/spinner"
import { HStack } from "styled-system/jsx"

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
