import { Beacon } from "@isbatak/solid-ui/beacon"
import { HStack } from "@isbatak/solid-ui/stack"

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
