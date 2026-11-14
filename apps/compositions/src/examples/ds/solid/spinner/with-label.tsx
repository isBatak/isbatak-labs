import { Spinner } from "@isbatak/solid-ui/spinner"
import { Text } from "@isbatak/solid-ui/text"
import { VStack } from "@isbatak/solid-ui/stack"

export function SpinnerWithLabelDemo() {
  return (
    <VStack gap="2" colorPalette="blue">
      <Spinner color="colorPalette.solid" />
      <Text color="colorPalette.solid">Loading...</Text>
    </VStack>
  )
}
