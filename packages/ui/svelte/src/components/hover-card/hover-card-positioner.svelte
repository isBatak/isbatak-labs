<script module lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card"

  export type HoverCardPositionerProps = HoverCard.PositionerProps
</script>

<script lang="ts">
  import { useHoverCardStyles } from "./hover-card-styles"

  let { ref = $bindable(null), class: className, ...props }: HoverCardPositionerProps = $props()
  const styles = useHoverCardStyles()
</script>

<HoverCard.Positioner bind:ref {...props} data-slot="positioner" class={[styles().positioner, className]} />
