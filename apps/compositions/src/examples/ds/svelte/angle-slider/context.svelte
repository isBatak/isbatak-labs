<script lang="ts">
  import { AngleSlider } from "@isbatak/svelte-ui/angle-slider"
</script>

<AngleSlider.Root>
  <AngleSlider.Context>
    {#snippet render(context)}
      <AngleSlider.Label>{context().value} degrees</AngleSlider.Label>
    {/snippet}
  </AngleSlider.Context>
  <AngleSlider.Control>
    <AngleSlider.MarkerGroup>
      <AngleSlider.Marker value={0} />
      <AngleSlider.Marker value={45} />
      <AngleSlider.Marker value={90} />
      <AngleSlider.Marker value={135} />
      <AngleSlider.Marker value={180} />
      <AngleSlider.Marker value={225} />
      <AngleSlider.Marker value={270} />
      <AngleSlider.Marker value={315} />
    </AngleSlider.MarkerGroup>
    <AngleSlider.Thumb />
  </AngleSlider.Control>
  <AngleSlider.ValueText />
  <AngleSlider.HiddenInput />
</AngleSlider.Root>
