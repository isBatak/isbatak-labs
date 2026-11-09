<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Dialog } from "@isbatak/svelte-ui/dialog"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Dialog.Root>
  <Dialog.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open dialog</Button>
    {/snippet}
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Publish changes</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <Stack gap="4" align="flex-start">
            <p>Open another dialog on top of this one. Each dialog keeps its own focus and layer.</p>
            <Dialog.Root>
              <Dialog.Trigger>
                {#snippet asChild(props)}
                  <Button {...props()} variant="outline">Open nested dialog</Button>
                {/snippet}
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>Nested dialog</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <p>Close this one to go back to the first dialog.</p>
                    </Dialog.Body>
                    <Dialog.CloseTrigger />
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </Stack>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Cancel</Button>
            {/snippet}
          </Dialog.ActionTrigger>
          <Button>Publish</Button>
        </Dialog.Footer>
        <Dialog.CloseTrigger />
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
