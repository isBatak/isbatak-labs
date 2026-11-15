import { Spinner } from "@isbatak/solid-ui/spinner"
import { HStack } from "@isbatak/solid-ui/stack"

export function SpinnerCustomSpeedDemo() {
  return (
    <HStack gap="5">
      <Spinner size="lg" animationDuration="slow" />
      <Spinner size="lg" />
      <Spinner size="lg" animationDuration="[1s]" />
    </HStack>
  )
}
