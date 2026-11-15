<script lang="ts">
  import { Loader } from "@isbatak/svelte-ui/loader"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="6" class={css({ textStyle: "sm", fontWeight: "medium" })}>
  <HStack gap="2">
    <Loader text="Loading…" spinnerPlacement="start" />
  </HStack>
  <HStack gap="2">
    <Loader text="Loading…" spinnerPlacement="end" />
  </HStack>
</HStack>
