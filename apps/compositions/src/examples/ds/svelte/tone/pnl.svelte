<script lang="ts">
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Tone, detectTone } from "@isbatak/svelte-ui/tone"
  import { css } from "styled-system/css"

  const profit = 103.24
  const loss = -103.24
</script>

<VStack gap="2" alignItems="flex-start">
  <Tone.Root tone={detectTone(profit)} class={css({ textStyle: "2xl", fontWeight: "semibold", gap: "1" })}>
    <Tone.Indicator />
    {Math.abs(profit).toFixed(2)}
  </Tone.Root>
  <Tone.Root tone={detectTone(loss)} class={css({ textStyle: "2xl", fontWeight: "semibold", gap: "1" })}>
    <Tone.Indicator />
    {Math.abs(loss).toFixed(2)}
  </Tone.Root>
</VStack>
