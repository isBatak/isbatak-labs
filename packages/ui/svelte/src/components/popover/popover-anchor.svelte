<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverAnchorProps = Popover.AnchorProps
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, ...props }: PopoverAnchorProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Anchor bind:ref {...props} data-slot="anchor" class={[styles().anchor, className]} />
