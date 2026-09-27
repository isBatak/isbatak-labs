<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"

  export type TooltipContentProps = Tooltip.ContentProps
</script>

<script lang="ts">
  import { useTooltipStyles } from "./tooltip-styles"

  let { ref = $bindable(null), class: className, ...props }: TooltipContentProps = $props()
  const styles = useTooltipStyles()
</script>

<Tooltip.Content bind:ref {...props} data-slot="content" class={[styles().content, className]} />
