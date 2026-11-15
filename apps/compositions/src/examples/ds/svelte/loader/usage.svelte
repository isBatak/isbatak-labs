<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Loader } from "@isbatak/svelte-ui/loader"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="6">
  <Box class={css({ position: "relative", display: "inline-flex" })}>
    <Loader>Hidden while loading</Loader>
  </Box>
  <HStack gap="2">
    <Loader text="Loading…" />
  </HStack>
</HStack>
