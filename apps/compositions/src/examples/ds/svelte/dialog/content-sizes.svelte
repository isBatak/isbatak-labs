<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Dialog } from "@isbatak/svelte-ui/dialog"
  import { Wrap } from "@isbatak/svelte-ui/wrap"
</script>

<Wrap gap="4">
  <Dialog.Root contentSize="xs">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">xs</Button>
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
          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
  <Dialog.Root contentSize="sm">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">sm</Button>
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
          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
  <Dialog.Root contentSize="md">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">md</Button>
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
          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
  <Dialog.Root contentSize="lg">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">lg</Button>
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
          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
  <Dialog.Root contentSize="xl">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">xl</Button>
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
          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
  <Dialog.Root contentSize="2xl">
    <Dialog.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">2xl</Button>
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
          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
</Wrap>
