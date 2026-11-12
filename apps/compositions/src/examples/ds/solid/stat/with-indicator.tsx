import { Stat } from "@isbatak/solid-ui/stat"

export function StatWithIndicatorDemo() {
  return (
    <Stat.Root>
      <Stat.Label>Unique visitors</Stat.Label>
      <Stat.ValueText>192.1k</Stat.ValueText>
      <Stat.HelpText>
        <Stat.DownIndicator />
        1.9%
      </Stat.HelpText>
    </Stat.Root>
  )
}
