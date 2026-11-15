import { ActionItem } from "@isbatak/react-ui/action-item"
import { Icon } from "@isbatak/react-ui/icon"
import { Switch } from "@isbatak/react-ui/switch"

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
