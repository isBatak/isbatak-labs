import { Spinner } from "@isbatak/solid-ui/spinner"
import { HStack } from "@isbatak/solid-ui/stack"

export function SpinnerColorsDemo() {
  return (
    <HStack gap="5">
      <Spinner size="lg" colorPalette="gray" color="colorPalette.solid" />
      <Spinner size="lg" colorPalette="blue" color="colorPalette.solid" />
      <Spinner size="lg" colorPalette="green" color="colorPalette.solid" />
      <Spinner size="lg" colorPalette="yellow" color="colorPalette.solid" />
      <Spinner size="lg" colorPalette="red" color="colorPalette.solid" />
    </HStack>
  )
}
