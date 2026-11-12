import { Stat } from "@isbatak/react-ui/stat"
import { HStack } from "@isbatak/react-ui/stack"

export function StatSizesDemo() {
  return (
    <HStack gap="8" alignItems="flex-start">
      <Stat.Root size="xs">
        <Stat.Label>Extra small</Stat.Label>
        <Stat.ValueText>192.1k</Stat.ValueText>
      </Stat.Root>
      <Stat.Root size="sm">
        <Stat.Label>Small</Stat.Label>
        <Stat.ValueText>192.1k</Stat.ValueText>
      </Stat.Root>
      <Stat.Root size="md">
        <Stat.Label>Medium</Stat.Label>
        <Stat.ValueText>192.1k</Stat.ValueText>
      </Stat.Root>
      <Stat.Root size="lg">
        <Stat.Label>Large</Stat.Label>
        <Stat.ValueText>192.1k</Stat.ValueText>
      </Stat.Root>
    </HStack>
  )
}
