<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { Toggle } from "@isbatak/svelte-ui/toggle"
</script>

<Toggle.Root defaultPressed>
  {#snippet asChild(props)}
    <Button {...props()} variant="outline">
      <StartIcon>
        {#snippet asChild(iconProps)}
          <Toggle.Indicator {...iconProps()}>
            <Icon name="check" />
          </Toggle.Indicator>
        {/snippet}
      </StartIcon>
      Subscribed
    </Button>
  {/snippet}
</Toggle.Root>
