import { ActionItem } from "@isbatak/react-ui/action-item"
import { Icon } from "@isbatak/react-ui/icon"
import { Text } from "@isbatak/react-ui/text"

export function ActionItemWithDescriptionDemo() {
  return (
    <ActionItem.Root maxW="sm">
      <ActionItem.StartElement>
        <Icon name="mail" />
      </ActionItem.StartElement>
      <ActionItem.Label>
        Email
        <Text as="span" textStyle="sm" fontWeight="normal" color="fg.muted">
          berthe.morisot@example.com
        </Text>
      </ActionItem.Label>
      <ActionItem.EndElement>
        <Icon name="chevron-right" />
      </ActionItem.EndElement>
    </ActionItem.Root>
  )
}
