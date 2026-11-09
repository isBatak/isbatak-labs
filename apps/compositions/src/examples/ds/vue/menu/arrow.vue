<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Menu } from "@isbatak/vue-ui/menu"
</script>

<template>
  <Menu.Root>
    <Menu.Trigger :asChild="true">
      <Button variant="outline">Actions</Button>
    </Menu.Trigger>
    <Teleport to="body">
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Arrow>
            <Menu.ArrowTip />
          </Menu.Arrow>
          <Menu.Item value="rename">Rename</Menu.Item>
          <Menu.Item value="duplicate">Duplicate</Menu.Item>
          <Menu.Item value="share">Share</Menu.Item>
          <Menu.Separator />
          <Menu.Item value="delete" color="fg.error">Delete</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Teleport>
  </Menu.Root>
</template>
