<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Tooltip } from "@isbatak/svelte-ui/tooltip"
</script>

<HStack gap="4">
  <Tooltip.Root size="sm">
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">sm</Button>
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
  <Tooltip.Root size="md">
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">md</Button>
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
  <Tooltip.Root size="lg">
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">lg</Button>
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
</HStack>
