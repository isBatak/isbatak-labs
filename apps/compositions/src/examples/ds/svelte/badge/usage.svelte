<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="2">
  <Badge>Default</Badge>
  <Badge class={css({ colorPalette: "green" })}>Success</Badge>
  <Badge class={css({ colorPalette: "red" })}>Removed</Badge>
  <Badge class={css({ colorPalette: "purple" })}>New</Badge>
</HStack>
