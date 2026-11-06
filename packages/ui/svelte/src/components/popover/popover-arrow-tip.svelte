<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverArrowTipProps = Popover.ArrowTipProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverArrowTipProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.ArrowTip bind:ref {...props} data-slot="arrowTip" class={[!unstyled && styles().arrowTip, className]} />
