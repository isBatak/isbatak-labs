<script lang="ts">
  import { Progress } from "@isbatak/svelte-ui/progress"
  import { css } from "styled-system/css"
  import { VStack } from "@isbatak/svelte-ui/stack"
</script>

<VStack gap="6">
  <Progress.Root striped defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root striped animated defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
</VStack>
