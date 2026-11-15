<script lang="ts">
  import { ActionItem } from "@isbatak/svelte-ui/action-item"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<ActionItem.Root maxW="sm" data-disabled="" aria-disabled="true">
  <ActionItem.Label>Delete account</ActionItem.Label>
  <ActionItem.EndElement>
    <Icon name="chevron-right" />
  </ActionItem.EndElement>
</ActionItem.Root>
