import { Beacon } from "@isbatak/react-ui/beacon"
import { HStack } from "@isbatak/react-ui/stack"

export function BeaconWithLabelDemo() {
  return (
    <HStack gap="3" textStyle="sm">
      <Beacon colorPalette="green" />
      Live
    </HStack>
  )
}
