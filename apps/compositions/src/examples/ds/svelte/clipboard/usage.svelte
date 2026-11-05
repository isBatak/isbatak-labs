<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Clipboard } from "@isbatak/svelte-ui/clipboard"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<Clipboard.Root value="https://isbatak.dev">
  <Clipboard.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} icon variant="surface" size="xs" aria-label="Copy link">
        <Clipboard.Indicator>
          <Icon name="copy" />
          {#snippet copied()}<Icon name="check" />{/snippet}
        </Clipboard.Indicator>
      </Button>
    {/snippet}
  </Clipboard.Trigger>
</Clipboard.Root>
