<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Drawer.Root size="sm">
      <Drawer.Trigger :asChild="true">
        <Button variant="outline">size sm</Button>
      </Drawer.Trigger>
      <Teleport to="body">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Preferences</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description
                >Change your preferences here. They apply to every device you sign in on.</Drawer.Description
              >
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Teleport>
    </Drawer.Root>
    <Drawer.Root size="md">
      <Drawer.Trigger :asChild="true">
        <Button variant="outline">size md</Button>
      </Drawer.Trigger>
      <Teleport to="body">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Preferences</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description
                >Change your preferences here. They apply to every device you sign in on.</Drawer.Description
              >
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Teleport>
    </Drawer.Root>
  </HStack>
</template>
