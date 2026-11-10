<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { FocusTrap } from "@isbatak/svelte-ui/focus-trap"
  import { Input } from "@isbatak/svelte-ui/input"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"

  let trapped = $state(false)
</script>

<Stack gap="4" alignItems="flex-start">
  <Button variant="outline" onclick={() => (trapped = true)}>Trap focus</Button>
  <FocusTrap disabled={!trapped} class={css({ display: "flex", flexDirection: "column", gap: "3", w: "full", maxW: "sm", p: "4", borderWidth: "1px", borderColor: "border.muted", borderRadius: "l3" })}>
    <Input placeholder="Name" />
    <Input placeholder="Email" />
    <Button onclick={() => (trapped = false)}>End trap</Button>
  </FocusTrap>
</Stack>
