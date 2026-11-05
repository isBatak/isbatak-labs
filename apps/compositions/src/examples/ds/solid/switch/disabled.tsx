import { Stack } from "@isbatak/solid-ui/stack"
import { Switch } from "@isbatak/solid-ui/switch"

export function SwitchDisabledDemo() {
  return (
    <Stack gap="4" align="flex-start">
      <Switch.Root disabled>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Disabled</Switch.Label>
      </Switch.Root>
      <Switch.Root disabled defaultChecked>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Disabled and on</Switch.Label>
      </Switch.Root>
    </Stack>
  )
}
