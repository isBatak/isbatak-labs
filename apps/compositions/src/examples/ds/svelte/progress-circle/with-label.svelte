<script lang="ts">
  import { ProgressCircle } from "@isbatak/svelte-ui/progress-circle"
  import { css } from "styled-system/css"
</script>

<ProgressCircle.Root defaultValue={65} class={css({ gap: "2", alignItems: "center" })}>
  <ProgressCircle.Label>Upload</ProgressCircle.Label>
  <ProgressCircle.Circle>
    <ProgressCircle.Track />
    <ProgressCircle.Range />
  </ProgressCircle.Circle>
</ProgressCircle.Root>
