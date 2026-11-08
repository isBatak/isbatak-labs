<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer, useDrawer } from "@isbatak/vue-ui/drawer"

const drawer = useDrawer({ swipeDirection: "down", snapPoints: [0.4, 1], defaultSnapPoint: 0.4 })
</script>

<template>
  <Button @click="drawer.setOpen(true)">Open from outside</Button>
  <Drawer.RootProvider :value="drawer">
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content h="[80dvh]">
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <Drawer.Header>
            <Drawer.Title>Using the API</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>
              The drawer is {{ drawer.snapPoint === 1 ? "expanded" : "at its first snap point" }}.
            </Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="outline" @click="drawer.setSnapPoint(drawer.snapPoint === 1 ? 0.4 : 1)">
              {{ drawer.snapPoint === 1 ? "Collapse" : "Expand" }}
            </Button>
            <Button @click="drawer.setOpen(false)">Close</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.RootProvider>
</template>
