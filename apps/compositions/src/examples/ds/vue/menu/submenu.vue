<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { Menu } from "@isbatak/vue-ui/menu"
</script>

<template>
  <Menu.Root>
    <Menu.Trigger :asChild="true">
      <Button variant="outline">File</Button>
    </Menu.Trigger>
    <Teleport to="body">
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new">New file</Menu.Item>
          <Menu.Item value="open">Open</Menu.Item>
          <Menu.Root :positioning="{ placement: 'right-start', gutter: 2 }">
            <Menu.TriggerItem>
              Share
              <Icon name="chevron-right" />
            </Menu.TriggerItem>
            <Teleport to="body">
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="email">Email</Menu.Item>
                  <Menu.Item value="link">Copy link</Menu.Item>
                  <Menu.Item value="embed">Embed</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Teleport>
          </Menu.Root>
          <Menu.Separator />
          <Menu.Item value="print">Print</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Teleport>
  </Menu.Root>
</template>
