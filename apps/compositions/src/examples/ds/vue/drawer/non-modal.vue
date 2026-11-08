<script setup lang="ts">
import { Button, CloseButton } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
</script>

<template>
  <Drawer.Root :modal="false" :trapFocus="false" :preventScroll="false" :closeOnInteractOutside="false">
    <Drawer.Trigger :asChild="true">
      <Button>Open non-modal drawer</Button>
    </Drawer.Trigger>
    <Teleport to="body">
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Non-modal</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>
              The page behind stays interactive. Scroll it or select text while this drawer is open.
            </Drawer.Description>
          </Drawer.Body>
          <Drawer.CloseTrigger :asChild="true">
            <CloseButton size="sm" />
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
