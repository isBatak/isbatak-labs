<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverArrowProps = Popover.ArrowProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverArrowProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Arrow bind:ref {...props} data-slot="arrow" class={[!unstyled && styles().arrow, className]} />
