<script lang="ts">
  import { ProgressCircle } from "@isbatak/svelte-ui/progress-circle"
</script>

<ProgressCircle.Root value={null}>
  <ProgressCircle.Circle>
    <ProgressCircle.Track />
    <ProgressCircle.Range />
  </ProgressCircle.Circle>
</ProgressCircle.Root>
