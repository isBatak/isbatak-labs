<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<Slider.Root defaultValue={[40]} class={css({ width: "full", maxW: "xs" })}>
  <HStack justify="space-between">
    <Slider.Label>Volume</Slider.Label>
    <Slider.ValueText />
  </HStack>
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumbs />
  </Slider.Control>
</Slider.Root>
