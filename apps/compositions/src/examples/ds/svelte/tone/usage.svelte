<script lang="ts">
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Tone } from "@isbatak/svelte-ui/tone"
  import { css } from "styled-system/css"
</script>

<VStack gap="2" alignItems="flex-start" class={css({ textStyle: "md", fontWeight: "medium" })}>
  <Tone.Root tone="positive">
    <Tone.Indicator />
    100.001
  </Tone.Root>
  <Tone.Root tone="negative">
    <Tone.Indicator />
    100.001
  </Tone.Root>
  <Tone.Root tone="neutral" class={css({ color: "fg.muted" })}>
    <Tone.Indicator />
    100.001
  </Tone.Root>
</VStack>
