<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { Menu } from "@isbatak/vue-ui/menu"
</script>

<template>
  <Menu.Root>
    <Menu.Trigger :asChild="true">
      <Button variant="outline">Edit</Button>
    </Menu.Trigger>
    <Teleport to="body">
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
    </Teleport>
  </Menu.Root>
</template>
