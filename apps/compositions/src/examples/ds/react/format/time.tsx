import { Format } from "@isbatak/react-ui/format"
import { Text } from "@isbatak/react-ui/text"
import { VStack } from "@isbatak/react-ui/stack"

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
