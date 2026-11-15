<script lang="ts">
  import { Status } from "@isbatak/svelte-ui/status"
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<VStack gap="3" alignItems="flex-start">
  <Status.Root size="sm" class={css({ colorPalette: "green" })}>
    <Status.Indicator />
    Size sm
  </Status.Root>
  <Status.Root size="md" class={css({ colorPalette: "green" })}>
    <Status.Indicator />
    Size md
  </Status.Root>
  <Status.Root size="lg" class={css({ colorPalette: "green" })}>
    <Status.Indicator />
    Size lg
  </Status.Root>
</VStack>
