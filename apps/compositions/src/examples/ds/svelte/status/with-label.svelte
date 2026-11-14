<script lang="ts">
  import { Status } from "@isbatak/svelte-ui/status"
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<VStack gap="3" alignItems="flex-start">
  <Status.Root class={css({ colorPalette: "green" })}>
    <Status.Indicator />
    Online
  </Status.Root>
  <Status.Root class={css({ colorPalette: "red" })}>
    <Status.Indicator />
    Offline
  </Status.Root>
  <Status.Root class={css({ colorPalette: "yellow" })}>
    <Status.Indicator />
    Away
  </Status.Root>
  <Status.Root class={css({ colorPalette: "blue" })}>
    <Status.Indicator />
    In a meeting
  </Status.Root>
</VStack>
