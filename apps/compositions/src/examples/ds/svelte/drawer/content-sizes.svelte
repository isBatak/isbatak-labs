<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button, CloseButton } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { Wrap } from "@isbatak/svelte-ui/wrap"
</script>

<Wrap gap="4">
  <Drawer.Root contentSize="xs">
    <Drawer.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">xs</Button>
      {/snippet}
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Preferences</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>Change your preferences here. They apply to every device you sign in on.</Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Drawer.ActionTrigger>
            <Button>Save</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger>
            {#snippet asChild(props)}
              <CloseButton {...props()} size="sm" />
            {/snippet}
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
  <Drawer.Root contentSize="sm">
    <Drawer.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">sm</Button>
      {/snippet}
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Preferences</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>Change your preferences here. They apply to every device you sign in on.</Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Drawer.ActionTrigger>
            <Button>Save</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger>
            {#snippet asChild(props)}
              <CloseButton {...props()} size="sm" />
            {/snippet}
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
  <Drawer.Root contentSize="md">
    <Drawer.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">md</Button>
      {/snippet}
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Preferences</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>Change your preferences here. They apply to every device you sign in on.</Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Drawer.ActionTrigger>
            <Button>Save</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger>
            {#snippet asChild(props)}
              <CloseButton {...props()} size="sm" />
            {/snippet}
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
  <Drawer.Root contentSize="lg">
    <Drawer.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">lg</Button>
      {/snippet}
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Preferences</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>Change your preferences here. They apply to every device you sign in on.</Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Drawer.ActionTrigger>
            <Button>Save</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger>
            {#snippet asChild(props)}
              <CloseButton {...props()} size="sm" />
            {/snippet}
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
  <Drawer.Root contentSize="xl">
    <Drawer.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">xl</Button>
      {/snippet}
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Preferences</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>Change your preferences here. They apply to every device you sign in on.</Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Drawer.ActionTrigger>
            <Button>Save</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger>
            {#snippet asChild(props)}
              <CloseButton {...props()} size="sm" />
            {/snippet}
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
  <Drawer.Root contentSize="full">
    <Drawer.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">full</Button>
      {/snippet}
    </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Preferences</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>Change your preferences here. They apply to every device you sign in on.</Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="outline">Cancel</Button>
              {/snippet}
            </Drawer.ActionTrigger>
            <Button>Save</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger>
            {#snippet asChild(props)}
              <CloseButton {...props()} size="sm" />
            {/snippet}
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
</Wrap>
