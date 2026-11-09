<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Dialog } from "@isbatak/svelte-ui/dialog"
  import { css } from "styled-system/css"
</script>

<Dialog.Root role="alertdialog">
  <Dialog.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline" class={css({ colorPalette: "red" })}>Delete project</Button>
    {/snippet}
  </Dialog.Trigger>
  <Portal>
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
          <Dialog.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Cancel</Button>
            {/snippet}
          </Dialog.ActionTrigger>
          <Button class={css({ colorPalette: "red" })}>Delete</Button>
        </Dialog.Footer>
        <Dialog.CloseTrigger />
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
