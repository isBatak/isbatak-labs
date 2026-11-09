<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { HoverCard } from "@isbatak/svelte-ui/hover-card"
  import { css } from "styled-system/css"
</script>

<HoverCard.Root>
  <HoverCard.Trigger>
    {#snippet asChild(props)}
      <a {...props()} href="https://ark-ui.com" class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>Ark UI</a>
    {/snippet}
  </HoverCard.Trigger>
  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content class={css({ maxW: "xs" })}>
        <HoverCard.Arrow>
          <HoverCard.ArrowTip />
        </HoverCard.Arrow>
        <p class={css({ fontWeight: "medium" })}>Ark UI</p>
        <p class={css({ textStyle: "sm", color: "fg.muted" })}>Headless components for React, Vue, Solid and Svelte.</p>
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
