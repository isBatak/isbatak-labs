<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Tooltip } from "@isbatak/svelte-ui/tooltip"
</script>

<HStack gap="4">
  <Tooltip.Root openDelay={0} closeDelay={0}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">No delay</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          Opens right away
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
  <Tooltip.Root openDelay={1000} closeDelay={500}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Slow</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          Opens after a second
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
</HStack>
