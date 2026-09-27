<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"

  export type TooltipTriggerProps = Tooltip.TriggerProps
</script>

<script lang="ts">
  import { useTooltipStyles } from "./tooltip-styles"

  let { ref = $bindable(null), class: className, ...props }: TooltipTriggerProps = $props()
  const styles = useTooltipStyles()
</script>

<Tooltip.Trigger bind:ref {...props} data-slot="trigger" class={[styles().trigger, className]} />
