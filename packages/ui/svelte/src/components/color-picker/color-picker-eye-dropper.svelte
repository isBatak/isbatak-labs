<script module lang="ts">
  import type { IconButtonProps } from "../button"

  export type ColorPickerEyeDropperProps = Omit<IconButtonProps, "children">
</script>

<script lang="ts">
  import { IconButton } from "../button"
  import { Icon } from "../icon"
  import ColorPickerEyeDropperTrigger from "./color-picker-eye-dropper-trigger.svelte"

  let props: ColorPickerEyeDropperProps = $props()
</script>

<ColorPickerEyeDropperTrigger>
  {#snippet asChild(triggerProps)}
    <IconButton variant="outline" aria-label="Pick a color from the screen" {...triggerProps()} {...props}>
      <Icon name="color-picker" />
    </IconButton>
  {/snippet}
</ColorPickerEyeDropperTrigger>
