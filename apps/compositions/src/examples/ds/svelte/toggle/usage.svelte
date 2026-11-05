<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Toggle } from "@isbatak/svelte-ui/toggle"
</script>

<Toggle.Root aria-label="Bold">
  {#snippet asChild(props)}
    <Button {...props()} icon variant="outline">
      <Icon name="bold" />
    </Button>
  {/snippet}
</Toggle.Root>
