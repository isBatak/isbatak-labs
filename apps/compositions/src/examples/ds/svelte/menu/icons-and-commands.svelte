<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Menu } from "@isbatak/svelte-ui/menu"
</script>

<Menu.Root>
  <Menu.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Edit</Button>
    {/snippet}
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.Item value="undo">
          <Icon name="undo" />
          <Menu.ItemText>Undo</Menu.ItemText>
          <Menu.ItemCommand>⌘Z</Menu.ItemCommand>
        </Menu.Item>
        <Menu.Item value="redo">
          <Icon name="redo" />
          <Menu.ItemText>Redo</Menu.ItemText>
          <Menu.ItemCommand>⇧⌘Z</Menu.ItemCommand>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item value="copy">
          <Icon name="copy" />
          <Menu.ItemText>Copy</Menu.ItemText>
          <Menu.ItemCommand>⌘C</Menu.ItemCommand>
        </Menu.Item>
        <Menu.Item value="delete">
          <Icon name="delete" />
          <Menu.ItemText>Delete</Menu.ItemText>
          <Menu.ItemCommand>⌫</Menu.ItemCommand>
        </Menu.Item>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
