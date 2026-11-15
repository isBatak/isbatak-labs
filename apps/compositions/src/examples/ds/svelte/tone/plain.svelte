<script lang="ts">
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Tone } from "@isbatak/svelte-ui/tone"
  import { css } from "styled-system/css"
</script>

<VStack gap="2" alignItems="flex-start" class={css({ textStyle: "md", fontWeight: "medium" })}>
  <Tone.Root tone="positive" plain>
    <Tone.Indicator class={css({ color: "fg.success" })} />
    +2.4%
  </Tone.Root>
  <Tone.Root tone="negative" plain>
    <Tone.Indicator class={css({ color: "fg.error" })} />
    -1.8%
  </Tone.Root>
</VStack>
