<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { Stack } from "@isbatak/svelte-ui/stack"

  const marks = [
    { value: 0, label: "0%" },
    { value: 50, label: "50%" },
    { value: 100, label: "100%" },
  ]
</script>

<Stack gap="6" width="full" maxW="xs">
  <Slider.Root defaultValue={[50]}>
    <Slider.Label>Opacity</Slider.Label>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
      <Slider.Marks {marks} />
    </Slider.Control>
  </Slider.Root>
  <Slider.Root defaultValue={[50]} variant="field">
    <Slider.Label>Opacity</Slider.Label>
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
      <Slider.Marks {marks} />
    </Slider.Control>
  </Slider.Root>
</Stack>
