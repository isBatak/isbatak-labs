import { Switch } from "@isbatak/solid-ui/switch"

export function SwitchDemo() {
  return (
    <Switch.Root defaultChecked>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Email notifications</Switch.Label>
    </Switch.Root>
  )
}
