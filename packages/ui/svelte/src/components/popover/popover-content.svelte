<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverContentProps = Popover.ContentProps
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, ...props }: PopoverContentProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Content bind:ref {...props} data-slot="content" class={[styles().content, className]} />
