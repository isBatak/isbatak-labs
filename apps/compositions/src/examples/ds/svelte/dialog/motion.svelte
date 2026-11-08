<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button, CloseButton } from "@isbatak/svelte-ui/button"
  import { Dialog } from "@isbatak/svelte-ui/dialog"
  import { Wrap } from "@isbatak/svelte-ui/wrap"
</script>

<Wrap gap="4">
  <Dialog.Root motionPreset="scale">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">scale</Button>
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
  <Dialog.Root motionPreset="slide-in-bottom">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">slide-in-bottom</Button>
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
  <Dialog.Root motionPreset="slide-in-top">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">slide-in-top</Button>
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
  <Dialog.Root motionPreset="slide-in-left">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">slide-in-left</Button>
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
  <Dialog.Root motionPreset="slide-in-right">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">slide-in-right</Button>
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
  <Dialog.Root motionPreset="none">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">none</Button>
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
</Wrap>
