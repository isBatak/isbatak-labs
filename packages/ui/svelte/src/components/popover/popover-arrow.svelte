<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverArrowProps = Popover.ArrowProps
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, ...props }: PopoverArrowProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Arrow bind:ref {...props} data-slot="arrow" class={[styles().arrow, className]} />
