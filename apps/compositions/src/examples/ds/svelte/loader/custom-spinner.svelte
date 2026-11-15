<script lang="ts">
  import { Loader } from "@isbatak/svelte-ui/loader"
  import { Spinner } from "@isbatak/svelte-ui/spinner"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="2" class={css({ textStyle: "sm", fontWeight: "medium", colorPalette: "blue" })}>
  <Loader text="Saving…">
    {#snippet spinner()}
      <Spinner size="sm" showTrack class={css({ color: "colorPalette.solid" })} />
    {/snippet}
  </Loader>
</HStack>
