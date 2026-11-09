<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Popover } from "@isbatak/svelte-ui/popover"
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Show details</Button>
    {/snippet}
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>
        <Popover.Header>
          <Popover.Title>Release notes</Popover.Title>
          <Popover.Description>See what changed in this version.</Popover.Description>
        </Popover.Header>
        <Popover.Footer>
          <Popover.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} size="sm">Got it</Button>
            {/snippet}
          </Popover.ActionTrigger>
        </Popover.Footer>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
