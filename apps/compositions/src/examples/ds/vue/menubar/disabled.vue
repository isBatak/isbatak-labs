<script setup lang="ts">
import { Menu } from "@isbatak/vue-ui/menu"
import { Menubar } from "@isbatak/vue-ui/menubar"
</script>

<template>
  <Menubar.Root :disabled="true">
    <Menu.Root>
      <Menubar.Trigger>File</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">New File</Menu.Item>
            <Menu.Item value="open">Open...</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>Edit</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="undo">Undo</Menu.Item>
            <Menu.Item value="redo">Redo</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
  </Menubar.Root>
</template>
