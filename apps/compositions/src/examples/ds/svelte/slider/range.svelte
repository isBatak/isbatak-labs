<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="6" width="full" maxW="xs">
  <Slider.Root defaultValue={[30, 70]}>
    <Slider.Label>Price range</Slider.Label>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[30, 70]} variant="field">
    <Slider.Label>Price range</Slider.Label>
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
</Stack>
