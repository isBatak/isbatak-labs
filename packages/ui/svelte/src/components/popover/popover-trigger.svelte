<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverTriggerProps = Popover.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverTriggerProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
