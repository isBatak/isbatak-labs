<script lang="ts">
  import { Progress } from "@isbatak/svelte-ui/progress"
  import { css } from "styled-system/css"
</script>

<Progress.Root value={null} class={css({ width: "full", maxW: "xs" })}>
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
</Progress.Root>
