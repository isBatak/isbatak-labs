<script lang="ts">
  import { Beacon } from "@isbatak/svelte-ui/beacon"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="3" class={css({ textStyle: "sm" })}>
  <Beacon class={css({ colorPalette: "green" })} />
  Live
</HStack>
