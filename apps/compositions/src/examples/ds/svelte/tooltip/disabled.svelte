<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Tooltip } from "@isbatak/svelte-ui/tooltip"
</script>

<Tooltip.Root disabled>
  <Tooltip.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Hover me</Button>
    {/snippet}
  </Tooltip.Trigger>
  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        You won't see this
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
