import { Spinner } from "@isbatak/react-ui/spinner"
import { HStack } from "styled-system/jsx"

export function SpinnerCustomSpeedDemo() {
  return (
    <HStack gap="5">
      <Spinner size="lg" animationDuration="slow" />
      <Spinner size="lg" />
      <Spinner size="lg" animationDuration="[1s]" />
    </HStack>
  )
}
