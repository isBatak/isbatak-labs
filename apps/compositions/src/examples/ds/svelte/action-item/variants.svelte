<script lang="ts">
  import { ActionItem } from "@isbatak/svelte-ui/action-item"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { VStack } from "@isbatak/svelte-ui/stack"
</script>

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
