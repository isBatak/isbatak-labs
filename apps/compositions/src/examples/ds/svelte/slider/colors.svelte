<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<Stack gap="4" width="full" maxW="xs">
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "gray" })}>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "blue" })}>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "green" })}>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "orange" })}>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "pink" })}>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "gray" })} variant="field">
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "blue" })} variant="field">
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "green" })} variant="field">
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "orange" })} variant="field">
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[40]} class={css({ colorPalette: "pink" })} variant="field">
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
</Stack>
