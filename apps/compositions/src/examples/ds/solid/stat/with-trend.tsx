import { Stat } from "@isbatak/solid-ui/stat"
import { HStack } from "@isbatak/solid-ui/stack"
import { Badge } from "@isbatak/solid-ui/badge"

export function StatWithTrendDemo() {
  return (
    <Stat.Root>
      <Stat.Label>Revenue</Stat.Label>
      <HStack>
        <Stat.ValueText>$8,456.40</Stat.ValueText>
        <Badge colorPalette="green" gap="0">
          <Stat.UpIndicator />
          12%
        </Badge>
      </HStack>
      <Stat.HelpText>since last month</Stat.HelpText>
    </Stat.Root>
  )
}
