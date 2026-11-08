<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
</script>

<Drawer.Root placement="bottom">
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()}>Open drawer</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content draggable={false}>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Drawer.Header>
          <Drawer.Title>Drag the handle</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Drawer.Description>
            Dragging the content does nothing. The grabber above still drags the drawer, so you can swipe it closed from
            there.
          </Drawer.Description>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Close</Button>
            {/snippet}
          </Drawer.ActionTrigger>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
