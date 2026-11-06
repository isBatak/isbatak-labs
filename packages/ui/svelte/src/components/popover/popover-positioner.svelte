<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverPositionerProps = Popover.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverPositionerProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
