"use client"

import { Switch } from "@isbatak/react-ui/switch"

export function SwitchDemo() {
  return (
    <Switch.Root defaultChecked>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Email notifications</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  )
}
