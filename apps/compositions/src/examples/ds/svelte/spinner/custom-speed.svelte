<script lang="ts">
  import { Spinner } from "@isbatak/svelte-ui/spinner"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="5">
  <Spinner size="lg" class={css({ animationDuration: "slow" })} />
  <Spinner size="lg" />
  <Spinner size="lg" class={css({ animationDuration: "[1s]" })} />
</HStack>
