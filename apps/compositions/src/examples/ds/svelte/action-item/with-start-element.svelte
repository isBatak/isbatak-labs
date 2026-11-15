<script lang="ts">
  import { ActionItem } from "@isbatak/svelte-ui/action-item"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { VStack } from "@isbatak/svelte-ui/stack"
</script>

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
