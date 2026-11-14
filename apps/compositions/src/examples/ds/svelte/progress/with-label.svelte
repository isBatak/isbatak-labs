<script lang="ts">
  import { Progress } from "@isbatak/svelte-ui/progress"
  import { css } from "styled-system/css"
</script>

<Progress.Root defaultValue={40} class={css({ width: "full", maxW: "xs" })}>
  <Progress.Label>Uploading</Progress.Label>
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
</Progress.Root>
