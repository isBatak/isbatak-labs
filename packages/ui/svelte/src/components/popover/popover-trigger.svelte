<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverTriggerProps = Popover.TriggerProps
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, ...props }: PopoverTriggerProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Trigger bind:ref {...props} data-slot="trigger" class={[styles().trigger, className]} />
