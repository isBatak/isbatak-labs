<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourPositionerProps = Tour.PositionerProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourPositionerProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Positioner bind:ref {...props} data-slot="positioner" class={[styles().positioner, className]} />
