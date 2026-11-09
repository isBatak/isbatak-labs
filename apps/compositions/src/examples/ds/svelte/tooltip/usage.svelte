<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Tooltip } from "@isbatak/svelte-ui/tooltip"
</script>

<Tooltip.Root openDelay={200}>
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
        Saved to your library
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
