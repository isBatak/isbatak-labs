import { Format } from "@isbatak/solid-ui/format"
import { Text } from "@isbatak/solid-ui/text"
import { VStack } from "@isbatak/solid-ui/stack"

export function FormatRelativeTimeDemo() {
  return (
    <VStack gap="2" alignItems="flex-start">
      <Text>
        <Format.RelativeTime value={new Date(Date.now() - 3 * 60 * 60 * 1000)} />
      </Text>
      <Text>
        <Format.RelativeTime value={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)} />
      </Text>
      <Text>
        <Format.RelativeTime value={new Date(Date.now() - 30 * 1000)} numeric="auto" />
      </Text>
    </VStack>
  )
}
