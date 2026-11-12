import { Stat } from "@isbatak/react-ui/stat"

export function StatWithGroupDemo() {
  return (
    <Stat.Group>
      <Stat.Root>
        <Stat.Label>Sent</Stat.Label>
        <Stat.ValueText>345,670</Stat.ValueText>
        <Stat.HelpText>
          <Stat.UpIndicator />
          23.36%
        </Stat.HelpText>
      </Stat.Root>
      <Stat.Root>
        <Stat.Label>Clicked</Stat.Label>
        <Stat.ValueText>45</Stat.ValueText>
        <Stat.HelpText>
          <Stat.DownIndicator />
          9.05%
        </Stat.HelpText>
      </Stat.Root>
    </Stat.Group>
  )
}
