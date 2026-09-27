<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"

  export type TooltipArrowProps = Tooltip.ArrowProps
</script>

<script lang="ts">
  import { useTooltipStyles } from "./tooltip-styles"

  let { ref = $bindable(null), class: className, ...props }: TooltipArrowProps = $props()
  const styles = useTooltipStyles()
</script>

<Tooltip.Arrow bind:ref {...props} data-slot="arrow" class={[styles().arrow, className]} />
