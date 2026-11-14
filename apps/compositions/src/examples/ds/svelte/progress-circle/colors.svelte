<script lang="ts">
  import { ProgressCircle } from "@isbatak/svelte-ui/progress-circle"
  import { css } from "styled-system/css"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="6">
  <ProgressCircle.Root class={css({ colorPalette: "gray" })} defaultValue={65}>
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
  <ProgressCircle.Root class={css({ colorPalette: "red" })} defaultValue={65}>
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
  <ProgressCircle.Root class={css({ colorPalette: "green" })} defaultValue={65}>
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
  <ProgressCircle.Root class={css({ colorPalette: "blue" })} defaultValue={65}>
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
  <ProgressCircle.Root class={css({ colorPalette: "purple" })} defaultValue={65}>
    <ProgressCircle.Circle>
      <ProgressCircle.Track />
      <ProgressCircle.Range />
    </ProgressCircle.Circle>
  </ProgressCircle.Root>
</HStack>
