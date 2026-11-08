<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
</script>

<template>
  <Drawer.Root placement="bottom">
    <Drawer.Trigger :asChild="true">
      <Button>Open drawer</Button>
    </Drawer.Trigger>
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content :draggable="false">
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <Drawer.Header>
            <Drawer.Title>Drag the handle</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>
              Dragging the content does nothing. The grabber above still drags the drawer, so you can swipe it closed
              from there.
            </Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger :asChild="true">
              <Button variant="outline">Close</Button>
            </Drawer.ActionTrigger>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
