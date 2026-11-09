<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Collapsible } from "@isbatak/svelte-ui/collapsible"
  import { css } from "styled-system/css"
</script>

<Collapsible.Root collapsedHeight={64} class={css({ maxW: "sm" })}>
  <Collapsible.Content>
    <div class={css({ textStyle: "sm", color: "fg.muted" })}>Ark UI's Collapsible shows and hides a single section of content. It animates the height, and keeps the trigger and content linked for screen readers. Ark UI's Collapsible shows and hides a single section of content. It animates the height, and keeps the trigger and content linked for screen readers. Set collapsedHeight to keep part of the content visible while it's closed.</div>
  </Collapsible.Content>
  <Collapsible.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="plain" size="sm" class={css({ mt: "2", px: "0" })}>
        Read more
        <Collapsible.Indicator />
      </Button>
    {/snippet}
  </Collapsible.Trigger>
</Collapsible.Root>
