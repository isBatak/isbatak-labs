import { Stack } from "@isbatak/solid-ui/stack"
import { Switch } from "@isbatak/solid-ui/switch"

export function SwitchSizesDemo() {
  return (
    <Stack gap="4" align="flex-start">
      <Switch.Root size="sm">
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Small</Switch.Label>
      </Switch.Root>
      <Switch.Root size="md">
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Medium</Switch.Label>
      </Switch.Root>
      <Switch.Root size="lg">
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Large</Switch.Label>
      </Switch.Root>
    </Stack>
  )
}
