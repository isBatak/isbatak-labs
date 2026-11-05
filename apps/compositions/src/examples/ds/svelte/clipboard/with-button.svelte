<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Clipboard } from "@isbatak/svelte-ui/clipboard"
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
</script>

<Clipboard.Root value="https://isbatak.dev">
  <Clipboard.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="surface" size="sm">
        <StartIcon>
          {#snippet asChild(iconProps)}
            <Clipboard.Indicator {...iconProps()}>
              <Icon name="copy" />
              {#snippet copied()}<Icon name="check" />{/snippet}
            </Clipboard.Indicator>
          {/snippet}
        </StartIcon>
        <Clipboard.Indicator>Copy link{#snippet copied()}Copied{/snippet}</Clipboard.Indicator>
      </Button>
    {/snippet}
  </Clipboard.Trigger>
</Clipboard.Root>
