<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Menu } from "@isbatak/vue-ui/menu"
import { ref } from "vue"

const toolbar = ref(true)
const statusBar = ref(true)
const minimap = ref(false)
</script>

<template>
  <Menu.Root :closeOnSelect="false">
    <Menu.Trigger :asChild="true">
      <Button variant="outline">View</Button>
    </Menu.Trigger>
    <Teleport to="body">
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>Show</Menu.ItemGroupLabel>
            <Menu.CheckboxItem value="toolbar" v-model:checked="toolbar">
              <Menu.ItemIndicator />
              <Menu.ItemText>Toolbar</Menu.ItemText>
            </Menu.CheckboxItem>
            <Menu.CheckboxItem value="status-bar" v-model:checked="statusBar">
              <Menu.ItemIndicator />
              <Menu.ItemText>Status bar</Menu.ItemText>
            </Menu.CheckboxItem>
            <Menu.CheckboxItem value="minimap" v-model:checked="minimap">
              <Menu.ItemIndicator />
              <Menu.ItemText>Minimap</Menu.ItemText>
            </Menu.CheckboxItem>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Teleport>
  </Menu.Root>
</template>
