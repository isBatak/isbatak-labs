<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Drawer.Root size="sm">
    <Drawer.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">size sm</Button>
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
          <Drawer.CloseTrigger />
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
  <Drawer.Root size="md">
    <Drawer.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">size md</Button>
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
          <Drawer.CloseTrigger />
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  </Drawer.Root>
</HStack>
