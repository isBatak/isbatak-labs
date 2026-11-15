<script setup lang="ts">
import { Menu } from "@isbatak/vue-ui/menu"
import { Menubar, useMenubar } from "@isbatak/vue-ui/menubar"
import { Stack } from "@isbatak/vue-ui/stack"
import { css } from "styled-system/css"

const menubar = useMenubar()
</script>

<template>
  <Stack gap="3" align="flex-start">
    <p :class="css({ color: 'fg.muted', textStyle: 'sm' })">Menu open: {{ String(menubar.hasOpenMenu) }}</p>
    <Menubar.RootProvider :value="menubar">
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
    </Menubar.RootProvider>
  </Stack>
</template>
