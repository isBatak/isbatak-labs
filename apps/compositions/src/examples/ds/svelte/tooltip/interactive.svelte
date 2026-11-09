<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Tooltip } from "@isbatak/svelte-ui/tooltip"
</script>

<Tooltip.Root interactive>
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
        Move the pointer onto me and I stay open
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
