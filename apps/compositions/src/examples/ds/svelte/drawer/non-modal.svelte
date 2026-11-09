<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
</script>

<Drawer.Root modal={false} trapFocus={false} preventScroll={false} closeOnInteractOutside={false}>
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()}>Open non-modal drawer</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Positioner>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Non-modal</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Drawer.Description>The page behind stays interactive. Scroll it or select text while this drawer is open.</Drawer.Description>
        </Drawer.Body>
        <Drawer.CloseTrigger />
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
