<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Clipboard } from "@isbatak/svelte-ui/clipboard"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<Clipboard.Root value="https://isbatak.dev" orientation="vertical">
  <Clipboard.Label>Share link</Clipboard.Label>
  <Clipboard.Control>
    <Clipboard.ValueText />
    <Clipboard.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} icon variant="ghost" size="xs" aria-label="Copy link">
          <Clipboard.Indicator>
            <Icon name="copy" />
            {#snippet copied()}<Icon name="check" />{/snippet}
          </Clipboard.Indicator>
        </Button>
      {/snippet}
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>
