<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { css } from "styled-system/css"

  const marks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
</script>

<Slider.Root defaultValue={[40]} step={10} class={css({ width: "full", maxW: "xs" })}>
  <Slider.Label>Volume</Slider.Label>
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumbs />
    <Slider.Marks {marks} />
  </Slider.Control>
</Slider.Root>
