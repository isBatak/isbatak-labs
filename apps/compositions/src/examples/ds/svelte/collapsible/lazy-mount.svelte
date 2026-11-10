<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Collapsible } from "@isbatak/svelte-ui/collapsible"
  import { css } from "styled-system/css"
</script>

<Collapsible.Root lazyMount unmountOnExit class={css({ maxW: "sm" })}>
  <Collapsible.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Toggle</Button>
    {/snippet}
  </Collapsible.Trigger>
  <Collapsible.Content>
    <div class={css({ p: "4", mt: "2", borderWidth: "1px", borderRadius: "l2", textStyle: "sm", color: "fg.muted" })}>This content mounts when it opens and unmounts when it closes.</div>
  </Collapsible.Content>
</Collapsible.Root>
