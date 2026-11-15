<script lang="ts">
  import { Status } from "@isbatak/svelte-ui/status"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="6">
  <Status.Root class={css({ colorPalette: "green" })}>
    <Status.Indicator />
  </Status.Root>
  <Status.Root class={css({ colorPalette: "red" })}>
    <Status.Indicator />
  </Status.Root>
  <Status.Root class={css({ colorPalette: "yellow" })}>
    <Status.Indicator />
  </Status.Root>
  <Status.Root class={css({ colorPalette: "blue" })}>
    <Status.Indicator />
  </Status.Root>
</HStack>
