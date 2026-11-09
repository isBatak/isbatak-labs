<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Menu } from "@isbatak/svelte-ui/menu"

  let toolbar = $state(true)
  let statusBar = $state(true)
  let minimap = $state(false)
</script>

<Menu.Root closeOnSelect={false}>
  <Menu.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">View</Button>
    {/snippet}
  </Menu.Trigger>
  <Portal>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Show</Menu.ItemGroupLabel>
          <Menu.CheckboxItem value="toolbar" bind:checked={toolbar}>
            <Menu.ItemIndicator />
            <Menu.ItemText>Toolbar</Menu.ItemText>
          </Menu.CheckboxItem>
          <Menu.CheckboxItem value="status-bar" bind:checked={statusBar}>
            <Menu.ItemIndicator />
            <Menu.ItemText>Status bar</Menu.ItemText>
          </Menu.CheckboxItem>
          <Menu.CheckboxItem value="minimap" bind:checked={minimap}>
            <Menu.ItemIndicator />
            <Menu.ItemText>Minimap</Menu.ItemText>
          </Menu.CheckboxItem>
        </Menu.ItemGroup>
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
