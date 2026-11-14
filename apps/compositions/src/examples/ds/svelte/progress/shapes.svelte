<script lang="ts">
  import { Progress } from "@isbatak/svelte-ui/progress"
  import { css } from "styled-system/css"
  import { VStack } from "@isbatak/svelte-ui/stack"
</script>

<VStack gap="6">
  <Progress.Root shape="square" defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root shape="rounded" defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root shape="full" defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
</VStack>
