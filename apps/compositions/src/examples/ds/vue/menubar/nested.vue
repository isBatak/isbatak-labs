<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Menu } from "@isbatak/vue-ui/menu"
import { Menubar } from "@isbatak/vue-ui/menubar"
</script>

<template>
  <Menubar.Root>
    <Menu.Root>
      <Menubar.Trigger>File</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">New File</Menu.Item>
            <Menu.Item value="open">Open...</Menu.Item>
            <Menu.Separator />
            <Menu.Root :positioning="{ placement: 'right-start', gutter: 2 }">
              <Menu.TriggerItem>
                Export
                <Icon name="chevron-right" />
              </Menu.TriggerItem>
              <Teleport to="body">
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="pdf">PDF</Menu.Item>
                    <Menu.Item value="png">PNG</Menu.Item>
                    <Menu.Item value="svg">SVG</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Teleport>
            </Menu.Root>
            <Menu.Separator />
            <Menu.Item value="print">Print...</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>Edit</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="cut">Cut</Menu.Item>
            <Menu.Item value="copy">Copy</Menu.Item>
            <Menu.Item value="paste">Paste</Menu.Item>
            <Menu.Separator />
            <Menu.Root :positioning="{ placement: 'right-start', gutter: 2 }">
              <Menu.TriggerItem>
                Find
                <Icon name="chevron-right" />
              </Menu.TriggerItem>
              <Teleport to="body">
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="find">Find...</Menu.Item>
                    <Menu.Item value="find-next">Find Next</Menu.Item>
                    <Menu.Item value="replace">Replace...</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Teleport>
            </Menu.Root>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
    <Menu.Root>
      <Menubar.Trigger>View</Menubar.Trigger>
      <Teleport to="body">
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="zoom-in">Zoom In</Menu.Item>
            <Menu.Item value="zoom-out">Zoom Out</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Teleport>
    </Menu.Root>
  </Menubar.Root>
</template>
