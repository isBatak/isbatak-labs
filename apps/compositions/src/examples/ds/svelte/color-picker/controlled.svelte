<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { ColorPicker, parseColor } from "@isbatak/svelte-ui/color-picker"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let color = $state(parseColor("#eb5e41"))
</script>

<Stack gap="3" maxW="2xs">
  <ColorPicker.Root bind:value={color}>
    <ColorPicker.HiddenInput />
    <ColorPicker.Label>Color</ColorPicker.Label>
    <ColorPicker.Control>
      <ColorPicker.Input />
      <ColorPicker.Trigger />
    </ColorPicker.Control>
    <Portal>
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.Area />
          <HStack gap="2">
            <ColorPicker.EyeDropper size="xs" />
            <ColorPicker.Sliders />
          </HStack>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </Portal>
  </ColorPicker.Root>
  <Text textStyle="sm" color="fg.muted">Value: {color.toString("hex")}</Text>
</Stack>
