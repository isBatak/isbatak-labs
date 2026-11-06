<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverAnchorProps = Popover.AnchorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverAnchorProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Anchor bind:ref {...props} data-slot="anchor" class={[!unstyled && styles().anchor, className]} />
