<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button, CloseButton } from "@isbatak/svelte-ui/button"
  import { Dialog } from "@isbatak/svelte-ui/dialog"
  import { input } from "@isbatak/panda-ds/recipes"

  let inputRef = $state<HTMLInputElement | null>(null)
</script>

<Dialog.Root initialFocusEl={() => inputRef}>
  <Dialog.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Rename file</Button>
    {/snippet}
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Rename file</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <input bind:this={inputRef} class={input()} value="report-final.pdf" aria-label="File name" />
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Cancel</Button>
            {/snippet}
          </Dialog.ActionTrigger>
          <Button>Rename</Button>
        </Dialog.Footer>
        <Dialog.CloseTrigger>
          {#snippet asChild(props)}
            <CloseButton {...props()} size="sm" />
          {/snippet}
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
