<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { HoverCard } from "@isbatak/svelte-ui/hover-card"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="6">
  <HoverCard.Root size="xs">
    <HoverCard.Trigger>
      {#snippet asChild(props)}
        <a {...props()} href="https://ark-ui.com" class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>xs</a>
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
  <HoverCard.Root size="sm">
    <HoverCard.Trigger>
      {#snippet asChild(props)}
        <a {...props()} href="https://ark-ui.com" class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>sm</a>
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
  <HoverCard.Root size="md">
    <HoverCard.Trigger>
      {#snippet asChild(props)}
        <a {...props()} href="https://ark-ui.com" class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>md</a>
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
  <HoverCard.Root size="lg">
    <HoverCard.Trigger>
      {#snippet asChild(props)}
        <a {...props()} href="https://ark-ui.com" class={css({ textDecoration: "underline", textUnderlineOffset: "4px" })}>lg</a>
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
</HStack>
