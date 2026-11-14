import { Format } from "@isbatak/solid-ui/format"
import { Text } from "@isbatak/solid-ui/text"
import { VStack } from "@isbatak/solid-ui/stack"

export function FormatByteDemo() {
  return (
    <VStack gap="2" alignItems="flex-start">
      <Text>
        <Format.Byte value={1450.45} />
      </Text>
      <Text>
        <Format.Byte value={1450.45} unitSystem="binary" />
      </Text>
      <Text>
        <Format.Byte value={1450.45} unit="bit" />
      </Text>
      <Text>
        <Format.Byte value={1450.45} unitDisplay="long" />
      </Text>
    </VStack>
  )
}
