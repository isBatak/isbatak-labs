<script lang="ts">
  import { ActionItem } from "@isbatak/svelte-ui/action-item"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Switch } from "@isbatak/svelte-ui/switch"
</script>

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
