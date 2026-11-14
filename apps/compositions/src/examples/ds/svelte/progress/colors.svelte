<script lang="ts">
  import { Progress } from "@isbatak/svelte-ui/progress"
  import { css } from "styled-system/css"
  import { VStack } from "@isbatak/svelte-ui/stack"
</script>

<VStack gap="6">
  <Progress.Root defaultValue={40} class={css({ colorPalette: "gray", width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root defaultValue={40} class={css({ colorPalette: "red", width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root defaultValue={40} class={css({ colorPalette: "green", width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root defaultValue={40} class={css({ colorPalette: "blue", width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
</VStack>
