<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverContentProps = Popover.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverContentProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
