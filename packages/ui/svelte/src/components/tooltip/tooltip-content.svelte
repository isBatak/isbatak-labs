<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"

  export type TooltipContentProps = Tooltip.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTooltipStyles } from "./tooltip-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TooltipContentProps = $props()
  const styles = useTooltipStyles()
</script>

<Tooltip.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
