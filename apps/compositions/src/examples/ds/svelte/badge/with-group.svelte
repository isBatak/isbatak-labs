<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Group } from "@isbatak/svelte-ui/group"
  import { css } from "styled-system/css"
</script>

<Group attached>
  <Badge variant="solid" class={css({ colorPalette: "blue" })}>
    Commit status
  </Badge>
  <Badge variant="solid" class={css({ colorPalette: "green" })}>
    90+
  </Badge>
</Group>
