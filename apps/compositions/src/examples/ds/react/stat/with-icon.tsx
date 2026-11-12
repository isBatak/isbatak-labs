import { Stat } from "@isbatak/react-ui/stat"
import { HStack } from "@isbatak/react-ui/stack"
import { Icon } from "@isbatak/react-ui/icon"

export function StatWithIconDemo() {
  return (
    <Stat.Root card maxW="xs">
      <HStack justifyContent="space-between">
        <Stat.Label>Sales</Stat.Label>
        <Icon name="shopping-bag" color="fg.muted" />
      </HStack>
      <Stat.ValueText>$4.24k</Stat.ValueText>
    </Stat.Root>
  )
}
