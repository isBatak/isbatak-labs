<script module lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card"

  export type HoverCardArrowTipProps = HoverCard.ArrowTipProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useHoverCardStyles } from "./hover-card-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: HoverCardArrowTipProps = $props()
  const styles = useHoverCardStyles()
</script>

<HoverCard.ArrowTip bind:ref {...props} data-slot="arrowTip" class={[!unstyled && styles().arrowTip, className]} />
