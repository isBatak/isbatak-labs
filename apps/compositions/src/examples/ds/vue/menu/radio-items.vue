<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Menu } from "@isbatak/vue-ui/menu"
import { ref } from "vue"

const sort = ref("name")
</script>

<template>
  <Menu.Root>
    <Menu.Trigger :asChild="true">
      <Button variant="outline">Sort</Button>
    </Menu.Trigger>
    <Teleport to="body">
      <Menu.Positioner>
        <Menu.Content>
          <Menu.RadioItemGroup v-model="sort">
            <Menu.ItemGroupLabel>Sort by</Menu.ItemGroupLabel>
            <Menu.RadioItem value="name">
              <Menu.ItemIndicator />
              <Menu.ItemText>Name</Menu.ItemText>
            </Menu.RadioItem>
            <Menu.RadioItem value="date">
              <Menu.ItemIndicator />
              <Menu.ItemText>Date modified</Menu.ItemText>
            </Menu.RadioItem>
            <Menu.RadioItem value="size">
              <Menu.ItemIndicator />
              <Menu.ItemText>Size</Menu.ItemText>
            </Menu.RadioItem>
          </Menu.RadioItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Teleport>
  </Menu.Root>
</template>
