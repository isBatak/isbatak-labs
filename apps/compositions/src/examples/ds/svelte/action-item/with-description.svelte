<script lang="ts">
  import { ActionItem } from "@isbatak/svelte-ui/action-item"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<ActionItem.Root maxW="sm">
  <ActionItem.StartElement>
    <Icon name="mail" />
  </ActionItem.StartElement>
  <ActionItem.Label>
    Email
    <Text as="span" textStyle="sm" fontWeight="normal" color="fg.muted">berthe.morisot@example.com</Text>
  </ActionItem.Label>
  <ActionItem.EndElement>
    <Icon name="chevron-right" />
  </ActionItem.EndElement>
</ActionItem.Root>
