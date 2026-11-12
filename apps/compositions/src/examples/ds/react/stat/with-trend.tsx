import { Stat } from "@isbatak/react-ui/stat"
import { HStack } from "@isbatak/react-ui/stack"
import { Badge } from "@isbatak/react-ui/badge"

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
