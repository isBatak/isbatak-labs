<script setup lang="ts">
import { Button, CloseButton } from "@isbatak/vue-ui/button"
import { Dialog } from "@isbatak/vue-ui/dialog"
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <Dialog.Root v-model:open="open">
    <Dialog.Trigger :asChild="true">
      <Button variant="outline">Open dialog</Button>
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
              Review the changes below before you publish them. Publishing makes them visible to everyone with access to
              the project.
            </p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger :asChild="true">
              <Button variant="outline">Cancel</Button>
            </Dialog.ActionTrigger>
            <Button>Publish</Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger :asChild="true">
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
