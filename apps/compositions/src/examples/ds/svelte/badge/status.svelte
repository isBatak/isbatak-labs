<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Wrap } from "@isbatak/svelte-ui/wrap"
  import { css } from "styled-system/css"
</script>

<Stack gap="6">
  <Wrap gap="2">
    <Badge status variant="outline" class={css({ colorPalette: "gray" })}>
      Neutral
    </Badge>
    <Badge status variant="outline" class={css({ colorPalette: "blue" })}>
      Info
    </Badge>
    <Badge status variant="outline" class={css({ colorPalette: "green" })}>
      Success
    </Badge>
    <Badge status variant="outline" class={css({ colorPalette: "yellow" })}>
      Warning
    </Badge>
    <Badge status variant="outline" class={css({ colorPalette: "red" })}>
      Error
    </Badge>
  </Wrap>
  <Wrap gap="2">
    <Badge status variant="plain" class={css({ colorPalette: "gray" })}>
      Neutral
    </Badge>
    <Badge status variant="plain" class={css({ colorPalette: "blue" })}>
      Info
    </Badge>
    <Badge status variant="plain" class={css({ colorPalette: "green" })}>
      Success
    </Badge>
    <Badge status variant="plain" class={css({ colorPalette: "yellow" })}>
      Warning
    </Badge>
    <Badge status variant="plain" class={css({ colorPalette: "red" })}>
      Error
    </Badge>
  </Wrap>
  <Wrap gap="2">
    <Badge status variant="solid" class={css({ colorPalette: "green" })}>
      Solid
    </Badge>
    <Badge status variant="subtle" class={css({ colorPalette: "green" })}>
      Subtle
    </Badge>
    <Badge status variant="surface" class={css({ colorPalette: "green" })}>
      Surface
    </Badge>
  </Wrap>
</Stack>
