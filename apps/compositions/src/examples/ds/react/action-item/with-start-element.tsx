import { ActionItem } from "@isbatak/react-ui/action-item"
import { Icon } from "@isbatak/react-ui/icon"
import { VStack } from "@isbatak/react-ui/stack"

export function ActionItemWithStartElementDemo() {
  return (
    <VStack gap="2" alignItems="stretch" maxW="sm">
      <ActionItem.Root>
        <ActionItem.StartElement>
          <Icon name="settings" />
        </ActionItem.StartElement>
        <ActionItem.Label>Settings</ActionItem.Label>
        <ActionItem.EndElement>
          <Icon name="chevron-right" />
        </ActionItem.EndElement>
      </ActionItem.Root>
      <ActionItem.Root>
        <ActionItem.StartElement>
          <Icon name="bell" />
        </ActionItem.StartElement>
        <ActionItem.Label>Notifications</ActionItem.Label>
        <ActionItem.EndElement>
          <Icon name="chevron-right" />
        </ActionItem.EndElement>
      </ActionItem.Root>
      <ActionItem.Root>
        <ActionItem.StartElement>
          <Icon name="lock" />
        </ActionItem.StartElement>
        <ActionItem.Label>Privacy</ActionItem.Label>
        <ActionItem.EndElement>
          <Icon name="chevron-right" />
        </ActionItem.EndElement>
      </ActionItem.Root>
    </VStack>
  )
}
