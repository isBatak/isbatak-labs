<script setup lang="ts">
import { Menu } from "@isbatak/vue-ui/menu"
import { Menubar } from "@isbatak/vue-ui/menubar"
</script>

<template>
  <Menubar.Root orientation="vertical">
    <Menu.Root :positioning="{ placement: 'right-start' }">
      <Menubar.Trigger>Account</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="profile">Profile</Menu.Item>
            <Menu.Item value="billing">Billing</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
    <Menu.Root :positioning="{ placement: 'right-start' }">
      <Menubar.Trigger>Workspace</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="members">Members</Menu.Item>
            <Menu.Item value="integrations">Integrations</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
    <Menu.Root :positioning="{ placement: 'right-start' }">
      <Menubar.Trigger>Help</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="docs">Documentation</Menu.Item>
            <Menu.Item value="support">Contact Support</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
  </Menubar.Root>
</template>
