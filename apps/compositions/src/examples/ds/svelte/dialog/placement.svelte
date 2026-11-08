<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button, CloseButton } from "@isbatak/svelte-ui/button"
  import { Dialog } from "@isbatak/svelte-ui/dialog"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Dialog.Root placement="top">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">top</Button>
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
            <p>Review the changes below before you publish them. Publishing makes them visible to everyone with access to the project.</p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Dialog.ActionTrigger>
            <Button>Publish</Button>
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
  <Dialog.Root placement="center">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">center</Button>
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
            <p>Review the changes below before you publish them. Publishing makes them visible to everyone with access to the project.</p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Dialog.ActionTrigger>
            <Button>Publish</Button>
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
  <Dialog.Root placement="bottom">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">bottom</Button>
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
            <p>Review the changes below before you publish them. Publishing makes them visible to everyone with access to the project.</p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Dialog.ActionTrigger>
            <Button>Publish</Button>
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
</HStack>
