<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Tooltip } from "@isbatak/svelte-ui/tooltip"
</script>

<HStack gap="4">
  <Tooltip.Root positioning={{ placement: "top" }}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Top</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          On top
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
  <Tooltip.Root positioning={{ placement: "right" }}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Right</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          On the right
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
  <Tooltip.Root positioning={{ placement: "bottom" }}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Bottom</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          Below
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
  <Tooltip.Root positioning={{ placement: "left" }}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Left</Button>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          On the left
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
</HStack>
