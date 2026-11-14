import { Format } from "@isbatak/react-ui/format"
import { Text } from "@isbatak/react-ui/text"
import { VStack } from "@isbatak/react-ui/stack"

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
