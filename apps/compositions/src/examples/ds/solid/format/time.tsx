import { Format } from "@isbatak/solid-ui/format"
import { Text } from "@isbatak/solid-ui/text"
import { VStack } from "@isbatak/solid-ui/stack"

export function FormatTimeDemo() {
  return (
    <VStack gap="2" alignItems="flex-start">
      <Text>
        <Format.Time value={new Date(2026, 10, 14, 15, 30, 45)} />
      </Text>
      <Text>
        <Format.Time value={new Date(2026, 10, 14, 15, 30, 45)} format="24h" />
      </Text>
      <Text>
        <Format.Time value={new Date(2026, 10, 14, 15, 30, 45)} withSeconds />
      </Text>
    </VStack>
  )
}
