import { Format } from "@isbatak/solid-ui/format"
import { Text } from "@isbatak/solid-ui/text"
import { VStack } from "@isbatak/solid-ui/stack"

export function FormatDemo() {
  return (
    <VStack gap="2" alignItems="flex-start">
      <Text>
        <Format.Number value={1234567.891} />
      </Text>
      <Text>
        <Format.Number value={1234.5} style="currency" currency="USD" />
      </Text>
      <Text>
        <Format.Number value={0.145} style="percent" maximumFractionDigits={1} />
      </Text>
      <Text>
        <Format.Number value={1234567} notation="compact" compactDisplay="short" />
      </Text>
    </VStack>
  )
}
