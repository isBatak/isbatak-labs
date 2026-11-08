<script lang="ts">
  import { Slider } from "@isbatak/svelte-ui/slider"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let value = $state([40])
</script>

<Stack gap="3" width="full" maxW="xs">
  <Slider.Root bind:value>
    <Slider.Label>Volume</Slider.Label>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
  <Text textStyle="sm" color="fg.muted">Value: {value[0]}</Text>
</Stack>
