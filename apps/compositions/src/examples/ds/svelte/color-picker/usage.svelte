<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { ColorPicker, parseColor } from "@isbatak/svelte-ui/color-picker"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<ColorPicker.Root defaultValue={parseColor("#eb5e41")} class={css({ maxW: "2xs" })}>
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
