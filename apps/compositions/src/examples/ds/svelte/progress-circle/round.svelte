<script lang="ts">
  import { ProgressCircle } from "@isbatak/svelte-ui/progress-circle"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="6">
  <ProgressCircle.Root defaultValue={65}>
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
  <ProgressCircle.Root defaultValue={65} round>
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
</HStack>
