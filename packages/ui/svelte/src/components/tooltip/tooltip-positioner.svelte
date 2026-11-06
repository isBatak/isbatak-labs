<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"

  export type TooltipPositionerProps = Tooltip.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTooltipStyles } from "./tooltip-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TooltipPositionerProps = $props()
  const styles = useTooltipStyles()
</script>

<Tooltip.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
