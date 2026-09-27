<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverArrowTipProps = Popover.ArrowTipProps
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, ...props }: PopoverArrowTipProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.ArrowTip bind:ref {...props} data-slot="arrowTip" class={[styles().arrowTip, className]} />
