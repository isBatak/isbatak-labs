<script lang="ts">
  import { Progress } from "@isbatak/svelte-ui/progress"
  import { css } from "styled-system/css"
  import { VStack } from "@isbatak/svelte-ui/stack"
</script>

<VStack gap="6">
  <Progress.Root size="xs" defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root size="sm" defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root size="md" defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root size="lg" defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
  <Progress.Root size="xl" defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
</VStack>
