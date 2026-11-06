<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverCloseTriggerProps = Popover.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverCloseTriggerProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.CloseTrigger bind:ref {...props} data-slot="closeTrigger" class={[!unstyled && styles().closeTrigger, className]} />
