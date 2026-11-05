<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
</script>

<Button>
  {#snippet asChild(props)}
    <a {...props()} href="#button">Button</a>
  {/snippet}
</Button>
