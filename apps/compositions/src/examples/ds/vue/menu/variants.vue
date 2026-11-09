<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Menu } from "@isbatak/vue-ui/menu"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Menu.Root variant="subtle">
      <Menu.Trigger :asChild="true">
        <Button variant="outline">Subtle</Button>
      </Menu.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="duplicate">Duplicate</Menu.Item>
            <Menu.Item value="share">Share</Menu.Item>
            <Menu.Separator />
            <Menu.Item value="delete" color="fg.error">Delete</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
    <Menu.Root variant="solid">
      <Menu.Trigger :asChild="true">
        <Button variant="outline">Solid</Button>
      </Menu.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="duplicate">Duplicate</Menu.Item>
            <Menu.Item value="share">Share</Menu.Item>
            <Menu.Separator />
            <Menu.Item value="delete" color="fg.error">Delete</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
  </HStack>
</template>
