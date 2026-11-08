<script setup lang="ts">
import { Button, CloseButton } from "@isbatak/vue-ui/button"
import { Dialog } from "@isbatak/vue-ui/dialog"
</script>

<template>
  <Dialog.Root role="alertdialog">
    <Dialog.Trigger :asChild="true">
      <Button variant="outline" colorPalette="red">Delete project</Button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Delete this project?</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <p>This deletes the project and everything in it. You can't undo this.</p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger :asChild="true">
              <Button variant="outline">Cancel</Button>
            </Dialog.ActionTrigger>
            <Button colorPalette="red">Delete</Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger :asChild="true">
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
