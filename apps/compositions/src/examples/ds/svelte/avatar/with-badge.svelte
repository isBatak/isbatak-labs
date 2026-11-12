<script lang="ts">
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { Circle } from "@isbatak/svelte-ui/circle"
  import { Float } from "@isbatak/svelte-ui/float"
  import { css } from "styled-system/css"
</script>

<Avatar.Root variant="subtle" class={css({ colorPalette: "green" })}>
  <Avatar.Fallback name="Dari Ann" />
  <Float placement="bottom-end" offsetX="1" offsetY="1">
    <Circle bg="green.solid" size="2" outline="[0.2em solid]" outlineColor="bg" />
  </Float>
</Avatar.Root>
