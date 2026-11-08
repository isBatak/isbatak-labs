<script setup lang="ts">
import { Button, CloseButton } from "@isbatak/vue-ui/button"
import { Dialog } from "@isbatak/vue-ui/dialog"
import { input } from "@isbatak/panda-ds/recipes"
import { ref } from "vue"

const inputRef = ref<HTMLInputElement | null>(null)
</script>

<template>
  <Dialog.Root :initialFocusEl="() => inputRef">
    <Dialog.Trigger :asChild="true">
      <Button variant="outline">Rename file</Button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Rename file</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <input ref="inputRef" :class="input()" value="report-final.pdf" aria-label="File name" />
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger :asChild="true">
              <Button variant="outline">Cancel</Button>
            </Dialog.ActionTrigger>
            <Button>Rename</Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger :asChild="true">
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
