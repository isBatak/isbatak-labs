<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Dialog } from "@isbatak/vue-ui/dialog"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Dialog.Root scrollBehavior="outside">
    <Dialog.Trigger :asChild="true">
      <Button variant="outline">Outside scroll</Button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Publish changes</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Stack gap="4">
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Stack>
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
</template>
