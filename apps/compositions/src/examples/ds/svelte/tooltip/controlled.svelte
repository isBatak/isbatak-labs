<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Tooltip } from "@isbatak/svelte-ui/tooltip"
  import { css } from "styled-system/css"

  let open = $state(false)
</script>

<HStack gap="4">
  <Tooltip.Root bind:open={open}>
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
  <p class={css({ color: "fg.muted", textStyle: "sm" })}>{open ? "The tooltip is open" : "The tooltip is closed"}</p>
</HStack>
