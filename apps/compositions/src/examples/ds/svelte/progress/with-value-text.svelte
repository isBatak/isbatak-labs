<script lang="ts">
  import { Progress } from "@isbatak/svelte-ui/progress"
  import { css } from "styled-system/css"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<Progress.Root defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
  <HStack justify="space-between">
    <Progress.Label>Upload</Progress.Label>
    <Progress.ValueText />
  </HStack>
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
</Progress.Root>
