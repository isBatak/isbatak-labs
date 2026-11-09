<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Popover } from "@isbatak/svelte-ui/popover"
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Show tip</Button>
    {/snippet}
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>
        <Popover.Header>
          <Popover.Title>Keyboard shortcuts</Popover.Title>
          <Popover.Description>Press ? anywhere to see every shortcut.</Popover.Description>
        </Popover.Header>
        <Popover.CloseTrigger />
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
