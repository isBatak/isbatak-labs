import { ActionItem } from "@isbatak/solid-ui/action-item"
import { Icon } from "@isbatak/solid-ui/icon"
import { VStack } from "@isbatak/solid-ui/stack"

export function ActionItemVariantsDemo() {
  return (
    <VStack gap="4" alignItems="stretch" maxW="sm">
      <ActionItem.Root variant="subtle">
        <ActionItem.Label>Subtle</ActionItem.Label>
        <ActionItem.EndElement>
          <Icon name="chevron-right" />
        </ActionItem.EndElement>
      </ActionItem.Root>
      <ActionItem.Root variant="plain">
        <ActionItem.Label>Plain</ActionItem.Label>
        <ActionItem.EndElement>
          <Icon name="chevron-right" />
        </ActionItem.EndElement>
      </ActionItem.Root>
    </VStack>
  )
}
