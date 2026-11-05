import { HStack } from "@isbatak/react-ui/stack"
import { Switch } from "@isbatak/react-ui/switch"

export function SwitchVariantsDemo() {
  return (
    <HStack gap="6">
      <Switch.Root variant="solid" defaultChecked>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Solid</Switch.Label>
      </Switch.Root>
      <Switch.Root variant="raised" defaultChecked>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Raised</Switch.Label>
      </Switch.Root>
    </HStack>
  )
}
