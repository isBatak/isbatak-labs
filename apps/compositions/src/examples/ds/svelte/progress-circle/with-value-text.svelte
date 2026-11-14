<script lang="ts">
  import { ProgressCircle } from "@isbatak/svelte-ui/progress-circle"
  import { AbsoluteCenter } from "@isbatak/svelte-ui/absolute-center"
</script>

<ProgressCircle.Root size="xl" defaultValue={65}>
  <ProgressCircle.Circle>
    <ProgressCircle.Track />
    <ProgressCircle.Range />
  </ProgressCircle.Circle>
  <AbsoluteCenter>
    <ProgressCircle.ValueText />
  </AbsoluteCenter>
</ProgressCircle.Root>
