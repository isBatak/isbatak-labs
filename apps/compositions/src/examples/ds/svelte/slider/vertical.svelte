<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { css } from "styled-system/css"

  const marks = [
    { value: 0, label: "0%" },
    { value: 50, label: "50%" },
    { value: 100, label: "100%" },
  ]
</script>

<Slider.Root defaultValue={[40]} orientation="vertical" class={css({ height: "48" })}>
  <Slider.Label>Volume</Slider.Label>
  <Slider.Control>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumbs />
    <Slider.Marks {marks} />
  </Slider.Control>
</Slider.Root>
