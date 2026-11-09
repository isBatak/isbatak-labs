<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Menu } from "@isbatak/vue-ui/menu"
</script>

<template>
  <Menu.Root :modalMode="true">
    <Menu.Trigger :asChild="true">
      <Button variant="outline">Open as a sheet</Button>
    </Menu.Trigger>
    <Teleport to="body">
      <Menu.Backdrop />
      <Menu.Positioner>
        <Menu.Content>
          <Menu.CloseTrigger />
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
