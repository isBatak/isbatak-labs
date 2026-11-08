<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
</script>

<template>
  <Drawer.Root placement="bottom" :float="true">
    <Drawer.Trigger :asChild="true">
      <Button>Float</Button>
    </Drawer.Trigger>
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content maxW="3xl" mx="auto">
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <Drawer.Header flexDirection="column" alignItems="stretch" gap="1" pt="3">
            <Drawer.Title>Float</Drawer.Title>
            <Drawer.Description>
              This drawer floats with a gap from the viewport edges and rounded corners.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Footer>
            <Drawer.ActionTrigger :asChild="true">
              <Button variant="outline">Cancel</Button>
            </Drawer.ActionTrigger>
            <Button>Save</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
