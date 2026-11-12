<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Wrap } from "@isbatak/svelte-ui/wrap"
  import { css } from "styled-system/css"
</script>

<Stack gap="3">
  <Wrap gap="2">
    <Badge class={css({ colorPalette: "gray" })}>Neutral</Badge>
    <Badge class={css({ colorPalette: "blue" })}>Info</Badge>
    <Badge class={css({ colorPalette: "green" })}>Success</Badge>
    <Badge class={css({ colorPalette: "yellow" })}>Warning</Badge>
    <Badge class={css({ colorPalette: "red" })}>Error</Badge>
  </Wrap>
  <Wrap gap="2">
    <Badge class={css({ colorPalette: "orange" })}>Orange</Badge>
    <Badge class={css({ colorPalette: "teal" })}>Teal</Badge>
    <Badge class={css({ colorPalette: "cyan" })}>Cyan</Badge>
    <Badge class={css({ colorPalette: "purple" })}>Purple</Badge>
    <Badge class={css({ colorPalette: "pink" })}>Pink</Badge>
  </Wrap>
</Stack>
