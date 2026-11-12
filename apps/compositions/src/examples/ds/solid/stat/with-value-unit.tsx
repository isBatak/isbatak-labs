import { Stat } from "@isbatak/solid-ui/stat"

export function StatWithValueUnitDemo() {
  return (
    <Stat.Root>
      <Stat.Label>Time to complete</Stat.Label>
      <Stat.ValueText alignItems="baseline">
        3 <Stat.ValueUnit>hr</Stat.ValueUnit>
        20 <Stat.ValueUnit>min</Stat.ValueUnit>
      </Stat.ValueText>
    </Stat.Root>
  )
}
