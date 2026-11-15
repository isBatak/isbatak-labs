import { Beacon } from "@isbatak/react-ui/beacon"
import { HStack } from "@isbatak/react-ui/stack"

export function BeaconColorsDemo() {
  return (
    <HStack gap="6">
      <Beacon size="lg" colorPalette="gray" />
      <Beacon size="lg" colorPalette="blue" />
      <Beacon size="lg" colorPalette="green" />
      <Beacon size="lg" colorPalette="yellow" />
      <Beacon size="lg" colorPalette="red" />
    </HStack>
  )
}
