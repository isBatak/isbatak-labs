import { Beacon } from "@isbatak/react-ui/beacon"
import { HStack } from "@isbatak/react-ui/stack"

export function BeaconSizesDemo() {
  return (
    <HStack gap="6">
      <Beacon size="sm" />
      <Beacon size="md" />
      <Beacon size="lg" />
      <Beacon size="xl" />
    </HStack>
  )
}
