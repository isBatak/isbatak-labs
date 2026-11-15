<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Menu } from "@isbatak/svelte-ui/menu"
  import { Menubar } from "@isbatak/svelte-ui/menubar"
</script>

<Menubar.Root>
  <Menu.Root>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new">
            <Menu.ItemText>New File</Menu.ItemText>
            <Menu.ItemCommand>⌘N</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Item value="open">
            <Menu.ItemText>Open...</Menu.ItemText>
            <Menu.ItemCommand>⌘O</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item value="save">
            <Menu.ItemText>Save</Menu.ItemText>
            <Menu.ItemCommand>⌘S</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Item value="save-as">
            <Menu.ItemText>Save As...</Menu.ItemText>
            <Menu.ItemCommand>⇧⌘S</Menu.ItemCommand>
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
  <Menu.Root>
    <Menubar.Trigger>Edit</Menubar.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="undo">
            <Menu.ItemText>Undo</Menu.ItemText>
            <Menu.ItemCommand>⌘Z</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Item value="redo">
            <Menu.ItemText>Redo</Menu.ItemText>
            <Menu.ItemCommand>⇧⌘Z</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item value="cut">
            <Menu.ItemText>Cut</Menu.ItemText>
            <Menu.ItemCommand>⌘X</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Item value="copy">
            <Menu.ItemText>Copy</Menu.ItemText>
            <Menu.ItemCommand>⌘C</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Item value="paste">
            <Menu.ItemText>Paste</Menu.ItemText>
            <Menu.ItemCommand>⌘V</Menu.ItemCommand>
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
  <Menu.Root>
    <Menubar.Trigger disabled>Develop</Menubar.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="inspect">Inspect Element</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
  <Menu.Root>
    <Menubar.Trigger>View</Menubar.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="zoom-in">
            <Menu.ItemText>Zoom In</Menu.ItemText>
            <Menu.ItemCommand>⌘+</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Item value="zoom-out">
            <Menu.ItemText>Zoom Out</Menu.ItemText>
            <Menu.ItemCommand>⌘-</Menu.ItemCommand>
          </Menu.Item>
          <Menu.Item value="fullscreen">Toggle Fullscreen</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
</Menubar.Root>
