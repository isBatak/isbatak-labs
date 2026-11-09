<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
</script>

<template>
  <Drawer.Root placement="end">
    <Drawer.Trigger :asChild="true" value="inbox">
      <Button>Inbox</Button>
    </Drawer.Trigger>
    <Drawer.Trigger :asChild="true" value="drafts">
      <Button variant="outline">Drafts</Button>
    </Drawer.Trigger>
    <Drawer.Trigger :asChild="true" value="archive">
      <Button variant="outline">Archive</Button>
    </Drawer.Trigger>
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Context v-slot="drawer">
            <Drawer.Header>
              <Drawer.Title textTransform="capitalize">{{ drawer.triggerValue }}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description>
                The {{ drawer.triggerValue }} button opened this drawer. Every trigger shares it, and triggerValue says
                which one was used.
              </Drawer.Description>
            </Drawer.Body>
          </Drawer.Context>
          <Drawer.Footer>
            <Drawer.ActionTrigger :asChild="true">
              <Button variant="outline">Close</Button>
            </Drawer.ActionTrigger>
          </Drawer.Footer>
          <Drawer.CloseTrigger />
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
