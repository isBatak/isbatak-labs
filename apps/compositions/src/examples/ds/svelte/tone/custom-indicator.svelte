<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Tone } from "@isbatak/svelte-ui/tone"
  import { css } from "styled-system/css"
</script>

<VStack gap="2" alignItems="flex-start" class={css({ textStyle: "md", fontWeight: "medium" })}>
  <Tone.Root tone="positive" class={css({ gap: "1" })}>
    <Tone.Indicator>
      <Icon name="arrow-up" />
    </Tone.Indicator>
    12 400
  </Tone.Root>
  <Tone.Root tone="negative" class={css({ gap: "1" })}>
    <Tone.Indicator>
      <Icon name="arrow-down" />
    </Tone.Indicator>
    3 150
  </Tone.Root>
</VStack>
