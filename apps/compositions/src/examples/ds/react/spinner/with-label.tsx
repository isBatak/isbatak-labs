import { Spinner } from "@isbatak/react-ui/spinner"
import { Text } from "@isbatak/react-ui/text"
import { VStack } from "styled-system/jsx"

export function SpinnerWithLabelDemo() {
  return (
    <VStack gap="2" colorPalette="blue">
      <Spinner color="colorPalette.solid" />
      <Text color="colorPalette.solid">Loading...</Text>
    </VStack>
  )
}
