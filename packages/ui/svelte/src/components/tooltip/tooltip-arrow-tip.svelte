<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"

  export type TooltipArrowTipProps = Tooltip.ArrowTipProps
</script>

<script lang="ts">
  import { useTooltipStyles } from "./tooltip-styles"

  let { ref = $bindable(null), class: className, ...props }: TooltipArrowTipProps = $props()
  const styles = useTooltipStyles()
</script>

<Tooltip.ArrowTip bind:ref {...props} data-slot="arrowTip" class={[styles().arrowTip, className]} />
