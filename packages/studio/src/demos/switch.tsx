import { Switch } from "./primitives"
import type { SampleProps } from "./types"

export function SwitchSample(props: SampleProps) {
  return (
    <Switch.Root defaultChecked {...props}>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Notifications</Switch.Label>
    </Switch.Root>
  )
}
