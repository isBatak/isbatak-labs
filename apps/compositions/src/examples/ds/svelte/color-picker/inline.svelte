<script lang="ts">
  import { ColorPicker, parseColor } from "@isbatak/svelte-ui/color-picker"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<ColorPicker.Root open defaultValue={parseColor("#eb5e41")} class={css({ maxW: "2xs" })}>
  <ColorPicker.HiddenInput />
  <ColorPicker.Label>Color</ColorPicker.Label>
  <ColorPicker.Content class={css({ shadow: "none", p: "0" })}>
    <ColorPicker.Area />
    <HStack gap="2">
      <ColorPicker.EyeDropper size="xs" />
      <ColorPicker.Sliders />
      <ColorPicker.ValueSwatch />
    </HStack>
  </ColorPicker.Content>
</ColorPicker.Root>
