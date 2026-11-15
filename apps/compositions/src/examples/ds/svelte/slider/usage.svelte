<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="6" width="full" maxW="xs">
  <Slider.Root defaultValue={[40]}>
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
  <Slider.Root defaultValue={[40]} variant="field">
    <Slider.Label>Volume</Slider.Label>
    <Slider.ValueText />
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
</Stack>
