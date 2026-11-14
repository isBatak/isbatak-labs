<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Ripple } from "@isbatak/svelte-ui/ripple"
</script>

<Ripple>
  {#snippet asChild(props)}
    <Button {...props()} variant="outline">Press or use keyboard</Button>
  {/snippet}
</Ripple>
