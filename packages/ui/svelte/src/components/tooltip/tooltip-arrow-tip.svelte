<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"

  export type TooltipArrowTipProps = Tooltip.ArrowTipProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTooltipStyles } from "./tooltip-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TooltipArrowTipProps = $props()
  const styles = useTooltipStyles()
</script>

<Tooltip.ArrowTip bind:ref {...props} data-slot="arrowTip" class={[!unstyled && styles().arrowTip, className]} />
