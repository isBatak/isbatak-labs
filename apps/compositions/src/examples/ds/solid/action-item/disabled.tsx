import { ActionItem } from "@isbatak/solid-ui/action-item"
import { Icon } from "@isbatak/solid-ui/icon"

export function ActionItemDisabledDemo() {
  return (
    <ActionItem.Root maxW="sm" data-disabled="" aria-disabled="true">
      <ActionItem.Label>Delete account</ActionItem.Label>
      <ActionItem.EndElement>
        <Icon name="chevron-right" />
      </ActionItem.EndElement>
    </ActionItem.Root>
  )
}
