<script lang="ts">
  import { ProgressCircle } from "@isbatak/svelte-ui/progress-circle"
</script>

<ProgressCircle.Root defaultValue={65}>
  <ProgressCircle.Circle>
    <ProgressCircle.Track />
    <ProgressCircle.Range />
  </ProgressCircle.Circle>
</ProgressCircle.Root>
