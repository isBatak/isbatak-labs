<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Popover } from "@isbatak/svelte-ui/popover"
</script>

<Popover.Root modalMode>
  <Popover.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open as a sheet</Button>
    {/snippet}
  </Popover.Trigger>
  <Portal>
    <Popover.Backdrop />
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Share this page</Popover.Title>
          <Popover.Description>In modal mode the popover leaves its trigger and sits at the bottom of the screen above a backdrop.</Popover.Description>
        </Popover.Header>
        <Popover.Footer>
          <Popover.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} size="sm" variant="outline">Cancel</Button>
            {/snippet}
          </Popover.ActionTrigger>
          <Button size="sm">Copy link</Button>
        </Popover.Footer>
        <Popover.CloseTrigger />
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
