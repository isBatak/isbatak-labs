import { Spinner } from "@isbatak/react-ui/spinner"
import { HStack } from "styled-system/jsx"

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
