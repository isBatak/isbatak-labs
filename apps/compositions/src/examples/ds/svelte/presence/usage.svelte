<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Presence } from "@isbatak/svelte-ui/presence"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"

  let present = $state(false)
</script>

<Stack gap="4" alignItems="flex-start">
  <Button variant="outline" onclick={() => (present = !present)}>Toggle</Button>
  <Presence {present} lazyMount unmountOnExit class={css({ maxW: "sm", p: "4", bg: "bg.subtle", borderRadius: "l3", textStyle: "sm", _open: { animationStyle: "scale-fade-in", animationDuration: "moderate" }, _closed: { animationStyle: "scale-fade-out", animationDuration: "fast" } })}>
    Fades and scales in. When it closes, it stays in the page until its exit animation ends.
  </Presence>
</Stack>
