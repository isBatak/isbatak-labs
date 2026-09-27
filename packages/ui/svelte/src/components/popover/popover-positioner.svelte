<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverPositionerProps = Popover.PositionerProps
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, ...props }: PopoverPositionerProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Positioner bind:ref {...props} data-slot="positioner" class={[styles().positioner, className]} />
