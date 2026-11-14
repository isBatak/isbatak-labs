import { ActionItem } from "@isbatak/react-ui/action-item"
import { Icon } from "@isbatak/react-ui/icon"

export function ActionItemDemo() {
  return (
    <ActionItem.Root maxW="sm">
      <ActionItem.Label>Account</ActionItem.Label>
      <ActionItem.EndElement>
        <Icon name="chevron-right" />
      </ActionItem.EndElement>
    </ActionItem.Root>
  )
}
