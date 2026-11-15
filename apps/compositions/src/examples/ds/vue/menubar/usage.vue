<script setup lang="ts">
import { Menu } from "@isbatak/vue-ui/menu"
import { Menubar } from "@isbatak/vue-ui/menubar"
</script>

<template>
  <Menubar.Root>
    <Menu.Root>
      <Menubar.Trigger>File</Menubar.Trigger>
      <Teleport to="body">
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
      </Teleport>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>Edit</Menubar.Trigger>
      <Teleport to="body">
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
      </Teleport>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger :disabled="true">Develop</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="inspect">Inspect Element</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>View</Menubar.Trigger>
      <Teleport to="body">
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
      </Teleport>
    </Menu.Root>
  </Menubar.Root>
</template>
