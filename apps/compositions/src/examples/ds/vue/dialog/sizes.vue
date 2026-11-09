<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Dialog } from "@isbatak/vue-ui/dialog"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Dialog.Root size="sm">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">size sm</Button>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </Dialog.Root>
    <Dialog.Root size="md">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">size md</Button>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </Dialog.Root>
  </HStack>
</template>
