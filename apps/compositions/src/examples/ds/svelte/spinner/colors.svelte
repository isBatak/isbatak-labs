<script lang="ts">
  import { Spinner } from "@isbatak/svelte-ui/spinner"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="5">
  <Spinner size="lg" class={css({ colorPalette: "gray", color: "colorPalette.solid" })} />
  <Spinner size="lg" class={css({ colorPalette: "blue", color: "colorPalette.solid" })} />
  <Spinner size="lg" class={css({ colorPalette: "green", color: "colorPalette.solid" })} />
  <Spinner size="lg" class={css({ colorPalette: "yellow", color: "colorPalette.solid" })} />
  <Spinner size="lg" class={css({ colorPalette: "red", color: "colorPalette.solid" })} />
</HStack>
