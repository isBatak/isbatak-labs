<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"

  export type TooltipPositionerProps = Tooltip.PositionerProps
</script>

<script lang="ts">
  import { useTooltipStyles } from "./tooltip-styles"

  let { ref = $bindable(null), class: className, ...props }: TooltipPositionerProps = $props()
  const styles = useTooltipStyles()
</script>

<Tooltip.Positioner bind:ref {...props} data-slot="positioner" class={[styles().positioner, className]} />
