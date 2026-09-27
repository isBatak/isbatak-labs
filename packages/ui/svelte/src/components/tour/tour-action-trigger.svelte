<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourActionTriggerProps = Tour.ActionTriggerProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourActionTriggerProps = $props()
  const styles = useTourStyles()
</script>

<Tour.ActionTrigger bind:ref {...props} data-slot="actionTrigger" class={[styles().actionTrigger, className]} />
