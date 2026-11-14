import { ActionItem } from "@isbatak/solid-ui/action-item"
import { Icon } from "@isbatak/solid-ui/icon"
import { Switch } from "@isbatak/solid-ui/switch"

export function ActionItemWithControlDemo() {
  return (
    <ActionItem.Root maxW="sm">
      <ActionItem.StartElement>
        <Icon name="moon" />
      </ActionItem.StartElement>
      <ActionItem.Label>Dark mode</ActionItem.Label>
      <ActionItem.ControlElement>
        <Switch.Root>
          <Switch.HiddenInput aria-label="Dark mode" />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>
      </ActionItem.ControlElement>
    </ActionItem.Root>
  )
}
