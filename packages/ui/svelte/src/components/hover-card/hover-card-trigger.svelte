<script module lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card"

  export type HoverCardTriggerProps = HoverCard.TriggerProps
</script>

<script lang="ts">
  import { useHoverCardStyles } from "./hover-card-styles"

  let { ref = $bindable(null), class: className, ...props }: HoverCardTriggerProps = $props()
  const styles = useHoverCardStyles()
</script>

<HoverCard.Trigger bind:ref {...props} data-slot="trigger" class={[styles().trigger, className]} />
