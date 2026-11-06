<script module lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card"

  export type HoverCardArrowProps = HoverCard.ArrowProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useHoverCardStyles } from "./hover-card-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: HoverCardArrowProps = $props()
  const styles = useHoverCardStyles()
</script>

<HoverCard.Arrow bind:ref {...props} data-slot="arrow" class={[!unstyled && styles().arrow, className]} />
