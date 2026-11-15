import { Beacon } from "@isbatak/solid-ui/beacon"
import { HStack } from "@isbatak/solid-ui/stack"

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
