<script lang="ts">
  import { Ripple } from "@isbatak/svelte-ui/ripple"
  import { center } from "styled-system/patterns"
</script>

<Ripple centered>
  {#snippet asChild(props)}
    <div {...props({ class: center({ w: "64", h: "32", bg: "bg.emphasized", borderRadius: "l3", userSelect: "none" }) })}>
      Always from the center
    </div>
  {/snippet}
</Ripple>
