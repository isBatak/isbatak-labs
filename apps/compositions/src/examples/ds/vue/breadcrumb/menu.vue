<script setup lang="ts">
import { Breadcrumb } from "@isbatak/vue-ui/breadcrumb"
import { Icon } from "@isbatak/vue-ui/icon"
import { Menu } from "@isbatak/vue-ui/menu"
import { css } from "styled-system/css"
</script>

<template>
  <Breadcrumb.Root>
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Menu.Root>
          <Menu.Trigger :asChild="true">
            <button
              :class="
                css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1',
                  color: 'fg.muted',
                  cursor: 'button',
                  borderRadius: 'l1',
                  _hover: { color: 'fg' },
                })
              "
            >
              Components
              <Icon name="chevron-down" />
            </button>
          </Menu.Trigger>
          <Teleport to="body">
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="theming">Theming</Menu.Item>
                <Menu.Item value="props">Props</Menu.Item>
                <Menu.Item value="customization">Customization</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Teleport>
        </Menu.Root>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
</template>
