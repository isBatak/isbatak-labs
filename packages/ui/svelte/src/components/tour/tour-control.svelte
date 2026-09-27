<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourControlProps = Tour.ControlProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourControlProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Control bind:ref {...props} data-slot="control" class={[styles().control, className]} />
