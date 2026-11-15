import { Beacon } from "@isbatak/solid-ui/beacon"
import { HStack } from "@isbatak/solid-ui/stack"

export function BeaconWithLabelDemo() {
  return (
    <HStack gap="3" textStyle="sm">
      <Beacon colorPalette="green" />
      Live
    </HStack>
  )
}
