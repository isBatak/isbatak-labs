<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Menu } from "@isbatak/svelte-ui/menu"
  import { Menubar } from "@isbatak/svelte-ui/menubar"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="4" align="flex-start">
  <Menubar.Root variant="outline">
    <Menu.Root>
      <Menubar.Trigger>File</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">New File</Menu.Item>
            <Menu.Item value="open">Open...</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>Edit</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="undo">Undo</Menu.Item>
            <Menu.Item value="redo">Redo</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>View</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="zoom-in">Zoom In</Menu.Item>
            <Menu.Item value="zoom-out">Zoom Out</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  </Menubar.Root>
  <Menubar.Root variant="subtle">
    <Menu.Root>
      <Menubar.Trigger>File</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">New File</Menu.Item>
            <Menu.Item value="open">Open...</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>Edit</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="undo">Undo</Menu.Item>
            <Menu.Item value="redo">Redo</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>View</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="zoom-in">Zoom In</Menu.Item>
            <Menu.Item value="zoom-out">Zoom Out</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  </Menubar.Root>
  <Menubar.Root variant="plain">
    <Menu.Root>
      <Menubar.Trigger>File</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">New File</Menu.Item>
            <Menu.Item value="open">Open...</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>Edit</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="undo">Undo</Menu.Item>
            <Menu.Item value="redo">Redo</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>View</Menubar.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="zoom-in">Zoom In</Menu.Item>
            <Menu.Item value="zoom-out">Zoom Out</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  </Menubar.Root>
</Stack>
