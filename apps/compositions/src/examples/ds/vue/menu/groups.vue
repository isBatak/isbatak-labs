<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
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
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>Styles</Menu.ItemGroupLabel>
            <Menu.Item value="bold">Bold</Menu.Item>
            <Menu.Item value="italic">Italic</Menu.Item>
            <Menu.Item value="underline">Underline</Menu.Item>
          </Menu.ItemGroup>
          <Menu.Separator />
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>Align</Menu.ItemGroupLabel>
            <Menu.Item value="left">Left</Menu.Item>
            <Menu.Item value="center">Center</Menu.Item>
            <Menu.Item value="right">Right</Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Teleport>
  </Menu.Root>
</template>
