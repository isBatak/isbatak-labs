<script module lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card"

  export type HoverCardPositionerProps = HoverCard.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useHoverCardStyles } from "./hover-card-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: HoverCardPositionerProps = $props()
  const styles = useHoverCardStyles()
</script>

<HoverCard.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
