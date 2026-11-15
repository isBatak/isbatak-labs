<script lang="ts">
  import { Beacon } from "@isbatak/svelte-ui/beacon"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="6">
  <Beacon size="lg" class={css({ colorPalette: "gray" })} />
  <Beacon size="lg" class={css({ colorPalette: "blue" })} />
  <Beacon size="lg" class={css({ colorPalette: "green" })} />
  <Beacon size="lg" class={css({ colorPalette: "yellow" })} />
  <Beacon size="lg" class={css({ colorPalette: "red" })} />
</HStack>
