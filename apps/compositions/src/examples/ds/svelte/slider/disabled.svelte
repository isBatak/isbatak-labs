<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { css } from "styled-system/css"
</script>

<Slider.Root defaultValue={[40]} disabled class={css({ width: "full", maxW: "xs" })}>
  <Slider.Label>Volume</Slider.Label>
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumbs />
  </Slider.Control>
</Slider.Root>
